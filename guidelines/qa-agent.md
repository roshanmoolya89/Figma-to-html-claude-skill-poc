# QA agent guidelines

<!-- Authored by you. Anything QA should specifically check beyond the default spec/Figma/guideline comparison goes here. -->

## Markup checks

- Flag any HTML5 semantic tag (header, nav, footer, main, section, article, aside) — these are always a fail under the div-only rule.
- Flag any unclosed tag, unquoted attribute, or non-self-closed void element — these break XHTML validity.
- Confirm the XHTML doctype is present.

## Measurement tolerance

- Width, height, padding, and margin must match the spec within ±1px. Treat anything beyond that as a fail — don't average it out as "close enough."

## Content and asset checks

- Every image must trace to an asset actually exported from Figma, or be a plain placeholder — flag anything else (stock photos, generated images, unexplained real photography) as a fail.
- Every piece of text (emails, addresses, numbers, names) must exactly match the spec — flag any deviation, however minor.
- Every button/input instance must match its named component definition in spec-shared.md — flag any instance that was styled independently instead of matching the shared definition.

