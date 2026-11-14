#!/usr/bin/env python3
"""Extractor local de imágenes y puntos LiDAR 2D de exportaciones PLANIX R1.

Dependencias para fotografías convencionales:
    pip install numpy opencv-python

Uso:
    python PLANIX_R1_Extractor.py Prueba.zip
    python PLANIX_R1_Extractor.py Prueba.zip --salida MiProyecto --vistas 8

Funciona sin credenciales ni servicios externos. No modifica el ZIP de origen.
"""
import argparse
import csv
import json
import math
import re
import zipfile
from pathlib import Path

try:
    import cv2
    import numpy as np
except ImportError:
    cv2 = None
    np = None


def proyeccion_perspectiva(pano_bgr, angulo, tamaño=(1600, 900), fov_h=92):
    """Transforma un panorama equirectangular en una vista fotográfica rectilínea."""
    alto, ancho = pano_bgr.shape[:2]
    ow, oh = tamaño
    x, y = np.meshgrid(np.arange(ow, dtype=np.float32), np.arange(oh, dtype=np.float32))
    x = (x - (ow - 1) / 2) / ((ow - 1) / 2)
    y = ((oh - 1) / 2 - y) / ((oh - 1) / 2)
    f = math.tan(math.radians(fov_h / 2))
    x *= f
    y *= (oh / ow) * f
    a = math.radians(angulo)
    rx = x * math.cos(a) + math.sin(a)
    rz = -x * math.sin(a) + math.cos(a)
    longitud = np.arctan2(rx, rz)
    latitud = np.arctan2(y, np.sqrt(rx * rx + rz * rz))
    mx = ((longitud / (2 * math.pi) + 0.5) * ancho).astype(np.float32)
    my = ((0.5 - latitud / math.pi) * alto).astype(np.float32)
    return cv2.remap(pano_bgr, mx, my, interpolation=cv2.INTER_LINEAR, borderMode=cv2.BORDER_WRAP)


def main():
    ap = argparse.ArgumentParser(description='Extraer fotos 360, vistas convencionales y datos LiDAR de un proyecto PLANIX R1')
    ap.add_argument('zip', type=Path, help='ZIP exportado de la app PLANIX')
    ap.add_argument('--salida', type=Path, default=Path('PLANIX_Extraido'), help='Carpeta de salida')
    ap.add_argument('--vistas', type=int, default=4, help='Número de vistas por panorama (0 = solo originales)')
    args = ap.parse_args()
    if args.vistas < 0 or args.vistas > 36:
        ap.error('El número de vistas debe estar entre 0 y 36')
    if not args.zip.is_file():
        ap.error(f'No se encuentra el ZIP: {args.zip}')
    if args.vistas and cv2 is None:
        ap.error('Para crear vistas convencionales instala: pip install numpy opencv-python (o usa --vistas 0)')

    base = args.salida
    for sub in ('Panoramicas_360', 'Previews', 'Fotos_Convencionales', 'Lidar_2D', 'Metadatos'):
        (base / sub).mkdir(parents=True, exist_ok=True)
    manifest = []
    with zipfile.ZipFile(args.zip) as z:
        candidates = [n for n in z.namelist() if re.search(r'/\d{4}/scan\.jpg$', n, re.IGNORECASE)]
        for name in sorted(candidates):
            carpeta = name.rsplit('/', 1)[0] + '/'
            nro = carpeta.rstrip('/').split('/')[-1]
            piso = carpeta.rstrip('/').split('/')[-2]
            # Prevent collisions between floors by prefixing a floor index
            n_idx = len(manifest) + 1
            stub = f'{n_idx:03d}_{nro}'
            jpeg = z.read(name)
            (base / 'Panoramicas_360' / f'{stub}_360.jpg').write_bytes(jpeg)
            prev = carpeta + 's.jpg'
            if prev in z.namelist():
                (base / 'Previews' / f'{stub}_preview.jpg').write_bytes(z.read(prev))
            metadata = carpeta + 'scan.json'
            meta = json.loads(z.read(metadata)) if metadata in z.namelist() else {}
            (base / 'Metadatos' / f'{stub}.json').write_text(json.dumps(meta, indent=2, ensure_ascii=False), encoding='utf-8')
            laser = carpeta + 'pts1.dat'
            count = 0
            if laser in z.namelist():
                if np is not None:
                    values = np.frombuffer(z.read(laser), dtype='<f4')
                    # Primer float coincide con el valor de brújula del JSON en estos ejemplos.
                    # Los restantes floats son parejas X/Y de coordenadas locales.
                    pts = values[1:].reshape(-1, 2) if len(values) % 2 == 1 else np.empty((0,2))
                    count = len(pts)
                    with (base / 'Lidar_2D' / f'{stub}_puntos.csv').open('w', encoding='utf-8', newline='') as f:
                        w = csv.writer(f)
                        w.writerow(['x_unidad_interna', 'y_unidad_interna'])
                        w.writerows((float(x), float(y)) for x, y in pts)
                else:
                    # The raw LiDAR bytes are retained for later numeric processing.
                    (base / 'Lidar_2D' / f'{stub}_pts1.dat').write_bytes(z.read(laser))
            if args.vistas:
                pano = cv2.imdecode(np.frombuffer(jpeg, np.uint8), cv2.IMREAD_COLOR)
                for j in range(args.vistas):
                    deg = 360 * j / args.vistas
                    foto = proyeccion_perspectiva(pano, deg)
                    cv2.imwrite(str(base / 'Fotos_Convencionales' / f'{stub}_vista_{j+1:02d}_{deg:.0f}grados.jpg'), foto, [cv2.IMWRITE_JPEG_QUALITY, 90])
            manifest.append({'piso': piso, 'escaneo': nro, 'archivo_original': name, 'puntos_lidar': count, 'pos': meta.get('pos'), 'rot': meta.get('rot')})
            print(f'Escaneo {nro} ({piso}) — panorama y {args.vistas} fotos generadas — {count} puntos locales')
    (base / 'inventario.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'Listo: {len(manifest)} escaneos guardados en {base.resolve()}')
    if not manifest:
        print('AVISO: No se encontraron carpetas de escaneo con scan.jpg')
    print('ATENCIÓN: Los puntos LiDAR se conservan sin calibración ni registro global; no son planos técnicos terminados.')

if __name__ == '__main__':
    main()