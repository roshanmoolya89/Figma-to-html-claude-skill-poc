# Coding agent guidelines
<!-- Authored by you. The coding agent treats every line here as binding. -->

## CSS
- Class naming: kebab-case (not camelCase)
- Define --color-primary, --color-secondary, --color-accent (and any other tokens from spec-shared.md) in :root
- Reference variables in rules — never hardcode a hex value that has a token
- Prefer BEM-style naming for reusable components

## Measurements
- Use the exact width, height, padding, and margin values recorded in the spec for each element — these come directly from Figma via markdown-agent, never estimated or rounded to "close enough" values.
- If a measurement isn't present in the spec for an element you're building, do not guess or use a default — flag it to the orchestrator as missing, the same as any other open question.
- Do not substitute relative units (%, em, rem, auto) for a value the spec gives as a fixed px measurement, unless the guideline elsewhere or the spec's "Responsive behavior" section explicitly calls for it.

## HTML
<!-- add project-specific conventions here -->

## JS
<!-- add project-specific conventions here -->
