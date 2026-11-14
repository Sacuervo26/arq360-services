# ARQ360 Studio — Prototipo independiente PLANIX R1

Esta rama contiene los primeros módulos de una futura plataforma ARQ360 para trabajar con capturas propias de PLANIX R1, sin necesidad de Planitar Draft para extraer fotografías o construir una base de puntos LiDAR 2D.

## Inicio
1. Descarga [arq360-studio.html](./arq360-studio.html) (botón Raw / Download raw de GitHub).
2. Abre el archivo localmente en Chrome o Edge actualizado.
3. Selecciona el ZIP original de la cámara PLANIX R1.
4. Explora panorámicas, genera fotografías convencionales y revisa los puntos.
5. En **Generador de tour automático** verifica las conexiones sugeridas por proximidad. Puedes añadir/quitar enlaces y trazar muros guía en el mapa.
6. Exporta el recorrido como un único HTML autónomo, un manifiesto JSON o un DXF **de croquis**.
7. Para un **DXF LiDAR 2D** basado en los archivos originales utiliza [lidar-zip-a-dxf.html](./lidar-zip-a-dxf.html), que permite ajustar ángulos de estaciones por separado.

## Módulos
| Archivo | Función | Situación |
| --- | --- | --- |
| `arq360-studio.html` | Importa ZIP, visualiza 360°, genera fotos, propone enlaces, dibuja muros guía, genera tour HTML y DXF de croquis; inventaría TAR | Prototipo integrado, sintaxis revisada |
| `importador-fotos.html` | Extrae panoramas, fotografías y gráficos de LiDAR 2D de ZIP | Prototipo previo |
| `lidar-zip-a-dxf.html` | Lee `pts1.dat` y `scan.json`, estima alineación, DXF LiDAR 2D | Prototipo previo |
| `extractor-python.py` | Extracción por lotes con Python | Código fuente |

## Datos de origen y formatos
- ZIP de captura: `####/scan.jpg`, `####/s.jpg`, `####/scan.json`, `####/pts1.dat`, `pc.dat`, `t.pic`.
- `scan.jpg`: panorámica equirectangular fotográfica.
- `pts1.dat`: en el proyecto de prueba se identificó un valor inicial float32 y después pares X/Y float32 little-endian.
- `scan.json`: puede contener `pos` y otros parámetros. **La posición de captura no es necesariamente la posición final corregida por Stitch**.
- TAR Stitch/Draft: el inspector **enumera archivos**, pero **no descifra** la geometría binaria de Draft ni reconstruye automáticamente las transformaciones definitivas de Stitch.

## Advertencias importantes
- Este es un **prototipo experimental**, no oficial, y no reemplaza Stitch, Draft o el proceso profesional de medición.
- La conexión por distancia puede crear enlaces a través de paredes; el usuario debe revisarlos.
- El croquis DXF no reproduce los muros originales de Draft ni equivale a un plano listo para obra.
- El módulo LiDAR trabaja en **2D con Z=0**. No representa una nube de puntos 3D certificada.
- La aplicación genera un HTML autocontenido con panoramas redimensionados a 4096 × 2048 píxeles; para proyectos grandes podría resultar pesado.
- Los archivos se procesan **localmente** en el navegador; este prototipo no sube automáticamente las capturas a servidores externos.
- Se comprobó la sintaxis JavaScript del módulo integrado. **Todavía no se ha completado una prueba integral de ejecución de todas las funciones con los TAR más recientes.**

## Próximas fases
1. Analizar de forma controlada los formatos TAR Stitch y Draft, su esquema de coordenadas y los IDs de panorámicas.
2. Soportar lectura de posiciones y orientación **definitivas** desde Stitch en lugar de usar sólo las de captura.
3. Entender la representación de muros y habitaciones de Draft o admitir DXF/SVG interoperable.
4. Sustituir el grafo de conexiones por uno que considere puertas y barreras.
5. Crear editor de planos a escala, snapping, calibración y exportación CAD con validación dimensional.
6. Publicar recorridos con almacenamiento privado, permisos y dominios propios.

Código de investigación y prototipo, desarrollado de manera independiente. iGUIDE, PLANIX, Stitch y Planitar son marcas de sus respectivos propietarios.
