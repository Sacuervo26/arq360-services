# ARQ360 iGUIDE SERVICES — MASTER BUILD SPEC FOR CODEX

## 0. Read this first

You are building a production-grade website for **ARQ360 iGUIDE SERVICES**, a Colombia-focused spatial technology company offering 3D scanning, iGUIDE virtual tours, floor plans, measurements, technical documentation, CAD/BIM outputs, and eventually PLANIX R1 sales/distribution support.

This project must **not** look like a conventional corporate site, a generic SaaS landing page, a gaming/cyberpunk template, or a basic architecture portfolio. The desired feeling is:

**premium spatial computing + architectural technology + LiDAR scanning + cinematic HUD / JARVIS-like interface + Iron-Man-inspired interaction language**, translated into a serious professional brand.

The core creative idea is:

> **The website itself is the experience.**
>
> Visitors should feel as though they have entered an intelligent ARQ360 spatial system from the first frame — without a splash screen, “play” button, “enter experience” gate, or modal.

The site must be cinematic and futuristic while remaining fast, accessible, understandable, professional, and commercially useful.

---

# 1. Project files and references

You have been given a folder named `ARQ360_CODEX_STARTER_PACK`.

Inspect every supplied reference before coding.

## Existing prototype

`current-preview/`

This is a lightweight HTML/CSS/JS prototype that validated:

- dark spatial color palette
- HUD visual language
- star/particle ambience
- overall homepage architecture
- iGUIDE tour integration concept
- early scan-line experimentation

**Important:** this prototype is not production code and should not constrain implementation quality. Reuse ideas, not necessarily the code architecture.

## Primary visual references

### Overall homepage / art direction

- `references/site-concept/homepage-master-concept.png`
- `references/site-concept/homepage-approved-layout-reference.jpeg`
- `references/hero/hero-cinematic-concept.png`
- `references/site-concept/current-v02-screenshot.png`

The master concept and cinematic hero establish the desired mood:

- deep black/navy environment
- electric ARQ360 cyan/blue accents
- premium architectural imagery
- a building transforming between physical reality and digital geometry
- technical HUD data around the scene
- product presence without looking like an ecommerce template
- strong hierarchy and large typography
- spatial / dimensional depth

### PLANIX R1 product fidelity — NON-NEGOTIABLE

Use these references:

- `references/planix/planix-front-reference.png`
- `references/planix/planix-angle-reference.png`
- `references/planix/planix-in-room-laser-reference.png`
- `references/planix/planix-laser-room-wide-reference.png`
- `references/planix/planix-scanned-room-effect-reference.png`

The PLANIX R1 must retain its real product form:

- tall rounded camera head
- top optical lens
- front display area
- horizontal shoulder / power-button section
- open central structural area
- lower black body geometry
- actual product proportions
- tripod relationship

**Do not redesign the camera into a fictional sci-fi scanner.**

The futurism belongs around the product: scanning beams, depth, HUD, lighting, data, point cloud, contour overlays, and spatial effects.

If no official licensed 3D PLANIX R1 model is available, **do not invent an inaccurate full 3D camera mesh**. For early production:

1. use high-quality product photography / cutouts with 2.5D parallax and depth,
2. optionally build only generic support/tripod geometry,
3. prepare the component architecture so an official GLB/GLTF model can replace it later without redesigning the section.

Product fidelity is more important than forcing fake 3D.

### iGUIDE output references

Use the supplied files in `references/iguide/` to understand the delivered product:

- interactive tour
- tablet tour UX
- floor plan on tablet
- analytics/reporting
- mobile capture application
- output viewer
- floor plans
- real-time tags
- CAD floor plan
- roof plan
- exterior elevations
- reflected ceiling plan
- 3D model

These are reference materials for the types of deliverables ARQ360 intends to present.

---

# 2. Public links / integrations to preserve

## iGUIDE interactive tour examples

Primary demo:

`https://youriguide.com/100_chattel_st_haverhill_ma`

Additional demo:

`https://youriguide.com/334_south_lake_shore_drive_thousand_oaks`

The goal is to embed an **actual interactive iGUIDE project**, not merely a screenshot.

## PLANIX / iGUIDE video reference

`https://www.youtube.com/watch?v=waROUizarks`

This video is also a major **motion-design reference**. The important visual behavior is not just the camera footage; it is the way a real interior becomes digitally scanned:

- scanning beams project from the camera
- surfaces acquire blue edge treatment
- geometry appears to adhere to walls, counters, fixtures, furniture, and architectural edges
- a point-cloud / digital-analysis look emerges progressively
- the effect feels spatially attached to the environment, not like a flat overlay sliding over the screen

The production website should translate that behavior into a real-time or pre-rendered interactive effect where practical.

## Public reference sites

- `https://goiguide.com/`
- `https://assetoracle3d.co.uk/`

Use iGUIDE as the product/content reference and Asset Oracle as a commercial/distributor-flow reference, but **do not copy either site's visual design**.

---

# 3. Brand positioning

Working brand presentation:

**ARQ360**
**iGUIDE SERVICES**

Primary positioning:

> Spatial technology for turning physical spaces into measurable, navigable, usable digital information.

Current Spanish hero concept:

**ESPACIOS REALES**

**TRANSFORMADOS\nEN INTELIGENCIA\nDIGITAL**

Supporting copy:

> Escaneo 3D, recorridos virtuales, planos, mediciones y documentación técnica con tecnología iGUIDE.

Primary CTA:

**SOLICITAR COTIZACIÓN**

Secondary CTA:

**CONOCER PLANIX R1**

Final brand message:

**DE LO REAL AL MUNDO DIGITAL.**

Alternative / supporting brand language:

- `REALITY CAPTURED. POTENTIAL UNLOCKED.`
- `DIGITIZE REALITY.`
- `UN ESCANEO. MÚLTIPLES ENTREGABLES.`
- `TU ESPACIO YA EXISTE. AHORA HAZLO DIGITAL.`

Do not overuse slogans. Each major section should have one strong idea.

---

# 4. Legal / brand wording constraints

Until ARQ360 receives explicit written authorization from Planitar/iGUIDE, do **not** state:

- “Distribuidor oficial exclusivo de iGUIDE Colombia”
- “Official exclusive distributor”
- trademark ownership
- any reseller/distributor status not explicitly confirmed

Safe provisional wording includes:

- `Servicios profesionales con tecnología iGUIDE`
- `Tecnología iGUIDE`
- `Conoce PLANIX R1`

Do not publish Colombia camera pricing until reseller terms, shipping, tariffs, taxes, warranty, and commercial structure are confirmed.

Do not publish claims or exact performance numbers unless supplied/approved. Existing references contain values such as 5–7 seconds per scan, LiDAR range, battery runtime, measurement accuracy, etc.; these must be verified before final production copy.

For now, keep all such metrics in a central config file so they can be corrected without touching layout code.

---

# 5. Desired emotional experience

The target is not “a nice futuristic website.”

It should feel like:

- a spatial command interface
- a premium digital twin laboratory
- a JARVIS-like architectural system
- an advanced building-scanning platform
- a cinematic HUD integrated into reality

But avoid:

- gaming UI
- cyberpunk overload
- purple neon
- sci-fi clichés everywhere
- illegible microtext
- gratuitous holograms
- animation for animation's sake

The desired balance is approximately:

- **70% premium architecture / spatial technology**
- **20% cinematic HUD / Iron-Man/JARVIS interaction language**
- **10% space / orbital ambience**

A visitor should think:

> “These people literally digitize buildings.”

not:

> “This looks like a video game.”

---

# 6. The key UX principle: ALWAYS ON

The site is already alive when the user arrives.

**Never require:**

- a play button to activate the overall experience
- an “Enter site” overlay
- a splash screen
- a fake loading sequence that blocks access
- a modal before content

The visual system should start naturally at first paint.

However, heavy resources should still be loaded progressively under the hood.

Strategy:

- immediate lightweight HUD/CSS/DOM motion
- progressive enhancement into WebGL once ready
- prefetch / preload 3D or iframe content near viewport
- only animate what is visible
- disable or simplify expensive loops when sections leave the viewport

The user should never notice that performance optimization is happening.

---

# 7. Technology stack

Recommended production stack:

## Core

- **Next.js** latest stable version
- App Router
- React
- **TypeScript** strict mode
- **Tailwind CSS**

## Motion

- **Framer Motion / Motion** for UI transitions, microinteractions, hover, reveal, parallax and small motion systems
- **GSAP + ScrollTrigger** for cinematic scroll choreography and pinned transformation sequences

## 3D / spatial effects

- **Three.js**
- **@react-three/fiber**
- **@react-three/drei**
- selective `@react-three/postprocessing` only when justified

Do not turn the whole website into one giant WebGL canvas.

Use DOM/CSS where possible and WebGL where it creates a real visual advantage.

Rule:

> If CSS can do it well, use CSS. If Motion can do it well, do not use Three.js. Use WebGL for actual spatial scenes and effects.

## Icons / vectors

- Lucide for utility icons
- custom SVG linework for HUD and brand-specific technical graphics

## Deployment

- Vercel-compatible

---

# 8. Performance requirements

The website must feel premium **and** fast.

Target metrics where realistically achievable:

- Lighthouse Performance: 90+
- Accessibility: 95+
- SEO: 95+
- Best Practices: 95+
- good Core Web Vitals

Performance principles:

- server components by default
- client components only when interaction requires them
- route-level and component-level code splitting
- dynamically import WebGL scenes
- pause animation loops outside viewport
- use `frameloop="demand"` for Three.js sections where possible
- adaptive DPR
- lower particle counts on weak/mobile devices
- compressed GLB/GLTF using Draco/Meshopt where available
- KTX2/WebP/AVIF textures
- `next/image`
- local/subset fonts
- avoid huge autoplay MP4 hero files unless highly compressed and justified
- no giant JS bundles for effects that CSS can handle
- respect `prefers-reduced-motion`
- support fallback imagery when WebGL is unavailable

Do not block LCP on 3D initialization.

The first meaningful frame should work without Three.js.

---

# 9. Visual design system

## Palette

Use as starting tokens:

```css
--bg: #020810;
--bg-deep: #01050A;
--surface: #06111B;
--surface-2: #071722;
--arq-blue: #00AEEF;
--energy-cyan: #00E5FF;
--text: #F4F8FB;
--text-muted: #78909C;
--line: rgba(0, 174, 239, 0.20);
--line-strong: rgba(0, 229, 255, 0.45);
--glow: rgba(0, 174, 239, 0.35);
```

Blue/cyan is an accent, not a fill-everything color.

## Typography

Preferred direction:

- Geist
- Inter
- Manrope

Use one main family unless a second technical mono font is truly useful.

Technical microcopy can use a monospace font sparingly.

Typography must remain elegant and readable. The futuristic feeling should come from layout, light, motion and technical detailing—not strange fonts.

## Geometry

- subtle radius, not giant bubbly SaaS cards
- fine 1px technical outlines
- occasional cut corners / bracket framing if elegant
- transparent HUD panels where useful
- avoid excessive glassmorphism

## Background

- very dark spatial field
- ultra-subtle star/point particles
- faint grids
- occasional technical arcs / orbital forms
- subtle depth fog

Do not make every section look like outer space. Architecture stays primary.

---

# 10. Motion language

All movement should feel physically motivated.

Examples:

- scan beams emerge from the camera or sweep through geometry
- point clouds assemble from real surfaces
- wireframes align with building edges
- data labels track a spatial anchor
- cards subtly move with pointer depth
- floor plan lines draw themselves
- counters animate when they become relevant
- a digital building rotates slightly in response to pointer movement

Avoid random floating objects.

## Hero scan-line behavior — important correction

The earlier prototype's bright vertical scan line was too frequent and too crisp.

New requirement:

- scan sweep should be **slow**
- one visible pass roughly every **12–20 seconds**, not constantly
- after a pass, allow a calm pause
- line should be **semi-transparent**
- use broad soft bloom / diffusion, not a hard neon stripe
- use layered blur with a narrow core and wide low-opacity halo
- edge intensity should respond to the environment
- do not wash out text

The scan should feel like an expensive sensor, not a CSS loading animation.

---

# 11. Surface-attached scan effect — central signature behavior

This is one of the most important interactions in the entire site.

Reference: PLANIX video screenshots in `references/planix/`.

The scan must appear to **adhere to walls, furniture, counters, openings, fixtures and spatial edges**, rather than simply overlaying the screen.

Preferred implementation for actual 3D environments:

1. represent a room / building scene using real geometry,
2. use a world-space scan origin / radius,
3. use a shader to reveal digital treatment based on distance from the scan plane / sphere,
4. combine with edge highlighting and point-cloud reveal,
5. optionally use depth/normal information for screen-space accenting,
6. keep glow controlled.

Desired transformation:

**REAL → SENSOR PASS → BLUE EDGES → POINT CLOUD → WIREFRAME / DIGITAL MODEL**

The effect can persist briefly behind the scan and then either settle into a digital layer or fade depending on the sequence.

Do not fake this with a single full-screen gradient if a real 3D scene is present.

For non-3D fallback, use masked pre-rendered image layers aligned with the architecture.

---

# 12. Hero — flagship experience

The hero is the most important part of the website.

It should feel like ARQ360's spatial operating system.

## Layout

Desktop concept:

- navigation over dark background
- left: headline/copy/CTAs
- center: architectural scene
- right: PLANIX R1 + technical HUD
- bottom: four performance/value metrics integrated into the hero

Do not treat the hero like two simple columns.

It should feel like one continuous spatial composition.

## Main architectural visual

A premium modern building or room should be shown partly in reality and partly in digital representation.

Possible hero progression:

1. real architectural scene
2. PLANIX begins scanning
3. beam sweeps across geometry
4. points and cyan edges emerge
5. part of the building turns into point cloud
6. wireframe / digital model grows from the physical structure
7. subtle technical labels appear

This sequence should loop very slowly or react to scroll; it must not feel repetitive every 3 seconds.

## 3D interaction

Desktop:

- building scene can have subtle orbit / pointer parallax
- user pointer may shift camera perspective gently
- optional drag-to-orbit interaction is allowed **only if it does not interfere with scrolling**
- use damping and strict limits
- never make users “operate” the hero to understand it

The house/building can be true 3D if an optimized asset is available or created.

A stylized architectural massing model is acceptable for early implementation, but final visual quality should be premium.

## PLANIX interaction

The camera should have subtle spatial depth:

- tiny pointer-linked rotation / parallax
- optical highlight movement
- scanning beams emitting from camera region
- glow reflection aligned with scan direction

If only a 2D product image is available, simulate depth subtly; do not rotate so much that flatness becomes obvious.

When an official 3D model becomes available, replace the presentation with actual geometry.

## HUD content

Use sparingly:

- `CAPTURING 100%`
- `POINT CLOUD`
- `FLOOR PLANS`
- `MEASUREMENTS`
- `CAD / DWG`
- `VIRTUAL TOUR`
- `PROPERTY REPORTS`
- `REALITY CAPTURED. POTENTIAL UNLOCKED.`
- coordinate readouts
- small reticles / tracking brackets

HUD elements should feel spatially anchored, not like dashboard widgets.

---

# 13. Navigation

Desktop navigation:

- INICIO
- SERVICIOS
- SOLUCIONES
- PLANIX R1
- PROYECTOS
- NOSOTROS

Primary CTA:

- CONTÁCTANOS

Potential later additions:

- RECURSOS
- COMPRAR CÁMARA

Behavior:

- transparent / low-opacity at top
- slightly more opaque on scroll
- thin technical bottom border or energy line
- no huge pill navbar
- mobile menu should feel like a compact spatial panel, not a generic drawer

---

# 14. Homepage architecture

Build the page in this conceptual order.

## 01 — HERO / Spatial Intelligence

Already described above.

## 02 — Live system metrics

Integrated directly after hero, not a generic stats section.

Current conceptual metrics:

- `PRECISIÓN / ±1% / EN MEDICIONES` — verify before launch
- `EFICIENCIA / 5–7s / POR ESCANEO` — verify before launch
- `INFORMACIÓN / MÚLTIPLES / ENTREGABLES`
- `POSIBILIDADES / TODOS LOS / SECTORES`

Metrics should be configurable.

## 03 — “Explora un proyecto real”

Core headline:

**NO TE LO IMAGINES. EXPLÓRALO.**

or

**EXPLORA UN PROYECTO REAL**

Supporting copy:

> Navega, mide, consulta el plano y descubre todo lo que puedes hacer con un espacio digitalizado con iGUIDE.

Embed a real `youriguide.com` tour.

### Important behavior

The user specifically does **not** want a static preview requiring a play-like action before the experience.

Instead:

- section visually exists immediately
- iframe begins loading shortly before the user reaches it using IntersectionObserver
- when the user arrives it should already feel ready
- the tour itself can retain whatever native iGUIDE interaction is required
- do not put a fake “play” overlay over it
- include a fallback external link if embedding is blocked

Desktop tour should be large — approximately 70–90% of the usable content width depending on layout.

### Industry tabs

Create future-ready tabs:

- REAL ESTATE
- ARQUITECTURA
- CONSTRUCCIÓN
- SEGUROS / RESTAURACIÓN
- FACILITY MANAGEMENT

Switching tabs can swap embedded tour URLs once appropriate examples are available.

Do not reload unnecessary tabs until selected.

## 04 — One scan, multiple deliverables

Headline:

**UN ESCANEO. MÚLTIPLES ENTREGABLES.**

Primary modules:

- Recorrido 3D
- Planos 2D
- Mediciones
- CAD / DWG
- BIM / Revit
- Point Cloud
- Reportes

Do not use generic line icons as final visuals.

Use real output previews from supplied references.

Cards should feel like technical viewport windows / holographic output modules.

Pointer hover can slightly change perspective, reveal metadata, or expand the asset.

## 05 — Spatial transformation sequence

A major cinematic section controlled by scroll.

Target narrative:

**REALIDAD → ESCANEO → POINT CLOUD → WIREFRAME → FLOOR PLAN → CAD → BIM**

Use GSAP ScrollTrigger carefully.

No aggressive scroll hijacking.

The page continues to scroll normally; the section may pin temporarily while transformation progresses.

This is where the strongest Iron-Man/JARVIS feeling should appear.

## 06 — PLANIX R1

Premium product presentation.

Headline:

**PLANIX R1**

Support:

**CAPTURA EL MUNDO EN DETALLE**

Use real PLANIX reference photography.

Add product callouts around it with subtle animated leader lines.

Potential callouts — verify before production:

- 360° camera
- LiDAR
- interchangeable battery
- fast capture
- simple workflow

This section should feel more like a premium Apple/industrial-design product reveal merged with ARQ360 HUD language.

## 07 — How it works

Four-step process:

1. CONECTA
2. ESCANEA
3. CARGA
4. RECIBE

Use a connected technical timeline / signal path, not four generic boxes.

## 08 — Technical outputs / add-ons

Use real previews:

- CAD Floor Plan / DWG
- Roof Plan
- Exterior Elevations
- Reflected Ceiling Plan
- 3D Model / Revit
- Point Cloud

These should be presented as serious technical outputs, with drawings visible.

Do not hardcode pricing yet.

## 09 — Solutions by industry

Current categories:

- Inmobiliarias / Real Estate
- Arquitectura / Remodelación
- Construcción
- Seguros & Restauración
- Facility Management
- Avalúos / Appraisals (potential)

Do not use the same repeated image for every industry.

Each needs a dedicated architectural/operational visual.

## 10 — PLANIX purchase / distribution path

The site eventually serves two customer journeys:

### A. Hire ARQ360

“Necesito digitalizar un espacio.”

### B. Acquire technology

“Quiero conocer / comprar PLANIX R1.”

Keep both pathways visible without competing with one another.

## 11 — Colombia / closing spatial section

Use Colombia as a subtle geographic identity cue.

Could include:

- orbital / earth view
- Colombia outline
- spatial network points
- restrained coordinate language

Headline:

**DE LO REAL AL MUNDO DIGITAL.**

Closing CTAs:

- SOLICITAR COTIZACIÓN
- HABLAR POR WHATSAPP

Do not make unsupported claims such as “Más espacios. Más posibilidades.” tied to distribution exclusivity.

## 12 — Footer

Minimal technical footer.

---

# 15. Additional site information architecture

Prepare routing and navigation architecture for:

```text
/
/services
/services/3d-virtual-tours
/services/floor-plans
/services/measurements
/services/cad-dwg
/services/bim-revit
/services/point-cloud
/services/property-reports

/solutions
/solutions/real-estate
/solutions/architecture
/solutions/construction
/solutions/insurance-restoration
/solutions/facility-management

/planix-r1
/projects
/about
/contact
/resources
```

Possible SEO landing pages later:

```text
/iguide-colombia
/tour-virtual-inmobiliario
/escaneo-3d-arquitectura
/planos-iguide
/levantamiento-arquitectonico-3d
/facility-management
```

Do not create thin placeholder pages solely to satisfy this list in the first milestone.

---

# 16. Components / code architecture

Do not make a giant `page.tsx`.

Suggested architecture:

```text
app/
  layout.tsx
  page.tsx
  services/
  solutions/
  planix-r1/
  projects/
  about/
  contact/

components/
  layout/
    Navbar.tsx
    MobileMenu.tsx
    Footer.tsx

  home/
    Hero.tsx
    MetricsBar.tsx
    InteractiveTour.tsx
    Deliverables.tsx
    SpatialTransformation.tsx
    PlanixSection.tsx
    Workflow.tsx
    TechnicalOutputs.tsx
    Industries.tsx
    ColombiaCTA.tsx

  hud/
    HUDFrame.tsx
    Reticle.tsx
    ScanIndicator.tsx
    DataIndicator.tsx
    Coordinates.tsx
    TrackingBracket.tsx
    EnergyLine.tsx

  three/
    HeroScene.tsx
    BuildingScene.tsx
    ScanShader.tsx
    PointCloudLayer.tsx
    WireframeLayer.tsx
    SpatialModelViewer.tsx

  ui/
    TechButton.tsx
    SectionEyebrow.tsx
    TechnicalFrame.tsx
    MediaViewport.tsx

data/
  navigation.ts
  metrics.ts
  deliverables.ts
  industries.ts
  technicalOutputs.ts
  tours.ts
  claims.ts

lib/
  motion/
  three/
  performance/
```

Separate content from layout.

All claims, URLs and product figures should live in data/config files.

---

# 17. 3D requirements

The user explicitly wants the site to go beyond a static futuristic webpage.

They want to feel like elements exist in 3D and can respond to the user.

## Building / house

The site should eventually include at least one real 3D architectural model that can:

- rotate subtly in response to pointer / drag
- exhibit depth and lighting
- transform from physical/materialized appearance into wireframe or point cloud
- receive scanning beams
- expose floor-plan / structural logic

Do not make all 3D interactions drag-only. The experience should remain understandable without touching it.

## Interactive model behavior

- subtle automatic idle movement
- user can influence rotation within limits
- no uncontrolled spinning
- damping
- clear pointer cursor affordance only when drag is enabled
- preserve natural page scroll

## PLANIX beam

The camera / scanner should emit a beam or scan field when appropriate.

It should originate spatially from the PLANIX visual and intersect the room/building.

Avoid Star-Wars laser styling. It is sensor visualization, not a weapon.

Use:

- soft cyan core
- low-opacity halo
- light volumetric feel
- occasional thin secondary guide ray

## Point cloud

Particles should map to actual building geometry or a sampled mesh where possible.

Do not use only random floating particles as a substitute for a point cloud.

## Wireframe

Wireframe should align with building geometry and architectural edges.

---

# 18. Mobile and responsive behavior

Desktop is the flagship cinematic experience.

Tablet keeps substantial depth/HUD but reduces density.

Mobile must **not** simply shrink desktop.

Mobile adaptation:

- simplify HUD
- reduce particle count significantly
- reduce or remove cursor-driven effects
- use touch-friendly model movement only when it is truly valuable
- reduce Three.js DPR / complexity
- use optimized static/pre-rendered fallback for expensive transformations if necessary
- keep hero copy and CTAs dominant
- allow iGUIDE iframe to use full available width
- preserve 60fps scrolling where possible

The mobile experience should still feel like ARQ360, but not overheat devices.

---

# 19. Video behavior

The site may use the YouTube/video material as an explanatory section, but the user does not want a typical “press play to experience this page” pattern.

If a video is used:

- it can autoplay muted when near/in viewport if browser rules allow
- controls can be available but visually unobtrusive
- do not autoplay audio
- lazy load the player
- consider using short optimized self-hosted loops / poster sequences for decorative motion if licensing permits

The site's main visual effects must not depend entirely on YouTube playback.

---

# 20. Interaction details

## Pointer

Optional custom pointer enhancement on desktop only:

- small reticle / precision dot
- very subtle
- never replace the native cursor where that hurts usability
- interactive elements must still clearly look interactive

## Buttons

Buttons can have:

- soft edge energy on hover
- moving highlight
- arrow translation
- tiny tracking brackets

Avoid huge glow blobs.

## HUD panels

- micro parallax
- low-frequency pulsing
- data labels should not constantly change unless meaningful
- use actual values or clearly decorative labels, never misleading fake analytics

## Scroll transitions

- smooth visual continuity
- no forced smooth-scroll library unless needed
- no scroll-jacking
- sticky/pinned scenes only for major transformation moments

---

# 21. Accessibility

The futuristic design must remain usable.

Requirements:

- semantic headings
- visible focus states
- keyboard navigation
- sufficient contrast
- `aria` labels where needed
- alternate text for meaningful images
- reduced-motion mode
- avoid seizure-inducing flicker
- no rapidly strobing scan lights
- touch targets large enough on mobile

When `prefers-reduced-motion` is enabled:

- disable pointer parallax
- simplify shader animation
- replace pinned transformation with crossfade/static sequence
- retain all content and functionality

---

# 22. SEO and content structure

Use proper metadata and structured semantic content.

Initial home metadata can conceptually target:

- escaneo 3D Colombia
- recorridos virtuales iGUIDE
- planos y mediciones
- levantamiento arquitectónico digital
- CAD / BIM from spatial capture

Do not keyword-stuff visible copy.

Use Schema.org later for Organization/LocalBusiness/Product/Service where legally and semantically appropriate.

---

# 23. Analytics / forms / contact — later phase

Prepare architecture for:

- contact form
- WhatsApp CTA
- analytics
- conversion tracking
- quote request with:
  - property/project type
  - approximate m²
  - required deliverables
  - name
  - email
  - WhatsApp / phone

Do not implement a fake backend.

Use environment variables for external services.

---

# 24. What NOT to do

Never reduce this project to:

- `hero → three generic cards → testimonials → footer`
- a generic blue SaaS template
- a clone of goiguide.com
- a clone of assetoracle3d.co.uk
- a portfolio template with a black background
- a purple/blue cyberpunk site
- dozens of glowing rectangles
- a loading screen pretending to be a computer terminal
- fake code/rain effects
- overwhelming tiny HUD text
- random star fields on every section
- inaccurate PLANIX R1 geometry
- constant high-frequency scan sweeps
- enormous JS bundles just for visual effects

---

# 25. Development process / milestones

Do not attempt to complete the entire website in one pass.

## PHASE 0 — Audit starter pack

Before coding:

1. inspect all references
2. run the existing prototype locally
3. document what is reusable and what should be replaced
4. identify missing assets

## PHASE 1 — Production foundation

Build:

- Next.js project
- TypeScript
- Tailwind
- design tokens
- typography
- responsive shell
- navigation
- basic accessibility
- data/config architecture

## PHASE 2 — Hero flagship scene

Build a production-quality first viewport with:

- architectural scene
- ARQ360 hero copy
- PLANIX reference presentation
- HUD
- slow diffuse scan
- pointer depth/parallax
- progressive load architecture for WebGL
- hero metrics

Add actual WebGL only where useful.

This phase is the current implementation priority.

## PHASE 3 — True spatial / 3D experience

Add:

- interactive 3D building
- point-cloud reveal
- wireframe transformation
- world-space scan shader
- bounded user orbit/parallax
- PLANIX sensor-beam visualization

## PHASE 4 — iGUIDE integration

Add:

- embedded tour
- industry tabs
- intelligent lazy loading
- fallback external link

## PHASE 5 — Remaining homepage

Add deliverables, technical outputs, PLANIX section, workflow, industries, Colombia CTA and footer.

## PHASE 6 — Internal pages

Build services, solutions, PLANIX, projects, about and contact.

## PHASE 7 — Production hardening

- performance profiling
- responsive QA
- browser QA
- Core Web Vitals
- accessibility audit
- SEO metadata
- error boundaries
- loading fallbacks
- image optimization

---

# 26. Current execution scope for Codex

**Start with PHASE 0 + PHASE 1 + PHASE 2 only.**

Do not build the entire site yet.

The first approval checkpoint is the **hero + metrics** because this establishes the visual and technical standard for the rest of ARQ360.

When done:

1. run the site locally
2. run TypeScript checks
3. run lint
4. verify desktop/tablet/mobile
5. capture screenshots at common desktop and mobile sizes
6. report bundle / obvious performance concerns
7. list what remains mocked vs truly 3D
8. explicitly state whether PLANIX is currently 2D/2.5D or real 3D
9. stop and wait for design approval before building the next major homepage section

---

# 27. Hero acceptance criteria

The hero is approved only when:

- it feels significantly more immersive than the supplied v0.2 prototype
- the PLANIX R1 shape is faithful to supplied references
- the architecture is visually premium
- the scan is slow, soft and spatially believable
- no harsh fast vertical stripe continuously loops
- some scan response appears attached to the environment / surfaces
- HUD looks integrated and restrained
- pointer movement creates real depth, not gimmicky motion
- user can understand ARQ360 immediately
- text remains highly readable
- page feels alive without requiring user activation
- scrolling is natural
- mobile fallback is deliberate and performant
- the result feels like spatial technology rather than a normal website with neon borders

---

# 28. Final creative summary

Build ARQ360 as if a premium architectural reality-capture company created its own spatial operating system.

The physical world is the input.

PLANIX / iGUIDE is the capture technology.

ARQ360 turns that reality into:

- navigable 3D spaces
- floor plans
- measurements
- CAD
- BIM
- point clouds
- technical outputs
- usable property intelligence

The visual story should continuously communicate this transformation:

> **PHYSICAL SPACE → CAPTURE → DIGITAL INTELLIGENCE**

The site should feel futuristic enough to evoke JARVIS / Iron-Man-like spatial interfaces, but polished enough for architects, real-estate companies, engineers, construction teams, insurers, facility managers, and enterprise buyers to trust it.

**Never sacrifice product accuracy, usability, or performance for spectacle.**

That balance is the identity of the project.
