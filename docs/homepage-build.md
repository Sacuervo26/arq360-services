# ARQ360 full homepage build

## Sections

01. Existing Hero and metrics (preserved)
02. Live iGUIDE digital twin
03. One scan / multiple deliverables
04. PLANIX R1 product
05. Four-step workflow
06. Industries
07. Advanced technical outputs
08. Colombia closing CTA
09. Footer

## Data and components

Section content lives in `data/home.ts`. Each major section is isolated under `components/home`, with shared reveal and heading primitives under `components/ui`.

## Media

- Supplied iGUIDE screenshots are used for deliverables and technical outputs.
- Supplied clean PLANIX angle imagery is used in the product section.
- The approved full-page concept provides the closing Colombia atmosphere.
- `industries-atlas.png` was generated as a project-local five-scene architectural atlas so every industry has distinct imagery without external runtime dependencies.

## Responsive behavior

- Desktop uses editorial split layouts and a five-column industries row.
- Tablet reflows product features and content into two/three-column systems.
- Mobile uses horizontally snapping deliverable and industry portals, a vertical workflow signal and sequential technical output presentation.
- Heavy media uses `next/image`; the external iGUIDE iframe is initialized only near the viewport.

## Remaining placeholders

- All category tabs currently point to the same supplied demonstration tour.
- WhatsApp needs the final Colombian destination number.
- Footer social links and email need confirmed destinations.
- Industry routes are future-ready but their destination pages are not part of this homepage task.
- Hero PLANIX remains a 2D photographic layer pending the dedicated future 3D refinement pass.
