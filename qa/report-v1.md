# QA report — round 1
Page: /src/pages/rpc (RPC)
Date: 2026-08-04T13:42:20+05:30

## Results
| Item | Status | Notes |
|---|---|---|
| Visual fidelity — hero background images present | FAIL | Hero slides are implemented as .hero-slide blocks but contain no background <img> or background-image. See src/pages/rpc/rpc.html lines 32-56 and css expecting .hero-slide img at css/rpc.css line 83. |
| Visual fidelity — hero layout/typography | PASS | Hero heading/subheading sizes and spacing use design tokens (60px H1, sub ~24px, content inset). CSS: css/rpc.css lines 85-87. |
| Visual fidelity — container/gutters and grid sizes | PASS | .container width/padding and card dimensions match spec tokens: css/rpc.css lines 46-52 (container), 110 (card size), 98 (two-col col width). |
| Visual fidelity — product images placement | PASS (minor) | Product cards include images using /src/assets/photo-*.jpeg. Files referenced in rpc.html lines 86-92. Visual photo→slot fidelity not verifiable against Figma screenshot here — see Open questions in design/spec-shared.md. |
| Accessibility — alt text quality | FAIL | Many image alt attributes are non-descriptive or generic: product images alt="product" (rpc.html lines 87-92), social icons alt="s1"/"s2" etc (rpc.html line 116), chevron/chev inconsistent alt text (rpc.html lines 26, 75, 87). Logo alt is acceptable (rpc.html line 22). |
| Accessibility — semantic roles / landmarks | FAIL | Page uses div-only rule (per guidelines) but lacks ARIA landmarks where appropriate: no role="navigation" on the main nav (.nav-links, rpc.html line 23), no role="main" on primary content/hero; top utility bar has role="banner" (rpc.html line 11) — good. |
| Accessibility — interactive controls keyboard/ARIA | FAIL | Hero carousel dot controls are implemented as plain <div class="dot"> (rpc.html lines 57-61) with click-only JS handlers (js/rpc.js lines 3-16). Dots are not keyboard focusable, have no role/aria attributes, and no pause/resume control for auto-rotation. |
| Accessibility — form labeling | FAIL | Newsletter email input has no associated <label> or aria-label (rpc.html line 110). Subscribe button is <button class="btn-primary"> with no type attribute. |
| Accessibility — color contrast | PASS | Key text colors meet contrast: body text --color-text (#101828) on white and white on primary (#e7000b) computed ~4.78:1 (css/rpc.css lines 2-13, 89). Footer text uses rgba white variants for adequate contrast (css/rpc.css lines 123-129). |
| Responsive behavior — general breakpoints | PASS (with caveat) | A responsive breakpoint at max-width:768px exists (css/rpc.css lines 132-139). Since Figma supplied only desktop frames, the coding-agent used a reasonable default. See Notes for suggested improvements. |
| Responsive behavior — products grid at tablet | FAIL / Needs attention | At <=768px .products-grid collapses to a single column (css/rpc.css line 136). Typical tablet behavior would keep 2 columns at tablet widths (~768px) — this may be a large deviation for medium screens. Spec had no tablet frame — recommend 2-column layout for widths >=600px and single column at small mobile. |
| Responsive behavior — hero sizing on mobile | FAIL | .hero has a fixed height of 600px (css/rpc.css line 79) with only content padding-top reduced at the breakpoint (line 138). Fixed 600px height can cause overflow/poor visual balance on small devices (e.g., 375px height screens). Recommend switching to min-height and responsive cropping or smaller height at narrow widths. |
| Interactions — carousel auto-rotate | PASS | Auto-rotate implemented using setInterval(5000) in js/rpc.js line 12. |
| Interactions — dot navigation | PARTIAL FAIL | Click-to-navigate is implemented (js/rpc.js lines 11-13), but dots are not keyboard accessible or announced (see Accessibility failures). |
| Interactions — CTA hover/focus states | FAIL | .btn-primary has no :hover or :focus rules defined; no focus outline for keyboard users (css/rpc.css lines 89-90). --color-primary-dark exists in :root but is not used. |
| Markup validity (QA guideline) | FAIL | Non-void element self-closed: <div class="hero-overlay" /> at rpc.html line 33 — invalid under XHTML rules per guidelines/qa-agent.md (must be <div ...></div>). Doctype present (rpc.html line 1) — OK. |

## Summary
- Passed:
  - Hero typography and content sizing (uses design tokens)
  - Container/gutter/card fixed measurements match spec
  - Carousel auto-rotate implemented
  - Color contrast for primary elements meets threshold
- Failed (actionable items):
  1. Hero background images missing from markup (visual fidelity) — rpc.html lines 32-56; css expects .hero-slide img (css/rpc.css line 83). Add background <img> per slide or set background-image inline/CSS using assets from /src/assets/photo-*.jpeg.
  2. Malformed/self-closed non-void element — <div class="hero-overlay" /> (rpc.html line 33). Fix to <div class="hero-overlay"></div>.
  3. Hero dots are non-semantic, non-keyboard controls — rpc.html lines 57-61; js handling in js/rpc.js lines 3-16. Replace dots with <button> elements or add role="button", tabindex="0", aria-label/aria-pressed states; add keyboard handlers (Enter/Space) and focus styles. Consider adding a visible pause/resume control for the carousel and stop auto-rotate on user interaction per accessibility guidance.
  4. Missing nav ARIA role/landmark — add role="navigation" and aria-label on nav container (rpc.html line 23). Add role="main" on main content wrapper (e.g., surrounding hero + main sections).
  5. Non-descriptive alt attributes — change generic alts to descriptive text (e.g., product images use product title: "Portable Office Cabin" etc). Files: rpc.html lines 87-92 (product images), line 116 (social icons: use "Facebook", "LinkedIn", etc. or descriptive). Chevron/chev/arrow icons: use alt="chevron" consistently or aria-hidden="true" on decorative icons and provide accessible text in controls.
  6. Form input not labeled and button missing type — newsletter input at rpc.html line 110: add <label for="newsletter-email"> or aria-label and set <button type="submit">. Wrap in a <form> (or role=form) and handle submission semantics.
  7. CTA hover/focus states missing — add :hover and :focus rules to .btn-primary using --color-primary-dark and a visible focus outline (e.g., box-shadow or outline) to meet keyboard accessibility.
  8. Responsive behavior: products grid collapses to 1 column at <=768px and hero keeps fixed 600px height — adjust breakpoint behavior to keep 2 columns on tablet widths and make hero height responsive (use min-height or media queries for <=480px to reduce height). Edit css/rpc.css lines 132-139 and 79/85/138 accordingly.

## Files & lines referenced (key locations)
- /src/pages/rpc/rpc.html: lines 32-56 (hero slides), 33 (hero-overlay), 57-61 (hero dots), 87-92 (product images), 110 (newsletter input), 116 (footer social icons), 22-28 (header/logo/nav). See the top of rpc.html for exact line numbers.
- /src/pages/rpc/css/rpc.css: lines 2-13 (tokens), 46-52 (container), 79-90 (hero rules, .btn-primary), 83 (hero-slide img selector), 98-116 (two-col / card rules), 110 (card-img), 123-131 (footer), 132-139 (responsive media query).
- /src/pages/rpc/js/rpc.js: lines 3-16 (carousel implementation: show(), next(), interval, dot click handlers).

## Next steps
- This report contains failing items that should be fixed by the coding-agent. Round: 1 of max 3.
- Please address the failures above and submit a new build for QA.

Escalated to orchestrator: no
