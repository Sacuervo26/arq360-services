# ARQ360 starter-pack audit

## Reusable foundations

- The dark navy/cyan palette, restrained technical linework, Spanish hero copy, navigation labels, CTA hierarchy, and four-metric structure are all aligned with the approved direction.
- `hero-cinematic-concept.png` is the strongest supplied architectural source. The production hero crops it to the building only so the mockup's embedded UI is not reused as interface content.
- `planix-front-reference.png` is used as the PLANIX product source. It remains photographic and is presented with a bounded 2.5D treatment rather than being recreated as fictional geometry.
- The iGUIDE output references clearly cover tours, floor plans, measurement, tags, analytics, CAD, roof plans, elevations, reflected ceiling plans, and 3D models. They should feed later homepage sections rather than this first milestone.

## Replaced from the prototype

- Static HTML/CSS/JS architecture was replaced with Next.js App Router, strict TypeScript, React components, data/config files, local Geist fonts, and a production build.
- The prototype's 6.4–8 second hard scan stripes were replaced with a diffuse 16-second sensor cycle with a long calm interval.
- The framed “video panel” hero was replaced with one continuous full-bleed spatial composition.
- Random page-wide stars were replaced with architecture-bound point data, fine surface texture, and a small WebGL massing/point-cloud layer.
- Product and claim values are separated from layout code; unverified values remain flagged in `data/metrics.ts` and `data/claims.ts`.

## Missing or provisional assets

- No licensed PLANIX R1 GLB/GLTF was supplied. PLANIX is therefore intentionally 2D/2.5D in this milestone.
- No production architectural GLB/GLTF was supplied. The WebGL layer is real geometry, but it is an abstract massing model aligned over the photographic architecture—not a final digital-twin asset.
- No clean official transparent PLANIX cutout was supplied. The implementation uses the official-form photograph with a non-destructive browser extraction filter. A licensed transparent PNG/WebP should replace it when available.
- No local high-resolution hero photograph without embedded concept graphics was supplied. A clean licensed architectural plate would improve fidelity and reduce the current source image size.
- Contact endpoints, analytics, verified commercial claims, distributor wording, product pricing, and internal-route content remain intentionally out of scope.

## Performance notes

- The meaningful first frame is DOM/CSS plus an optimized image; WebGL mounts during browser idle time.
- The WebGL layer uses adaptive DPR and no post-processing pipeline.
- Reduced-motion users receive a static presentation with no scan or pointer parallax.
- The supplied hero PNG is approximately 2.3 MB before Next.js optimization and is the primary asset to replace or recompress before launch.
