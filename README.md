# Figma-to-code agent kit

Drop this folder structure into your project root (or merge it in if you already have one). See the setup PDF for connection steps and how to run the pipeline.

your-project/
├── .claude/
│ ├── agents/
│ │ ├── markdown-agent.md
│ │ ├── coding-agent.md
│ │ └── qa-agent.md
│ └── commands/
│ └── build-page.md (runs the full pipeline unattended via /build-page)
├── design/
│ ├── spec-shared.md (template — becomes real once markdown-agent runs)
│ ├── spec-template.md (reference structure for per-page specs)
│ └── spec.meta.json (cache metadata)
├── guidelines/
│ ├── global.md
│ ├── coding-agent.md
│ ├── qa-agent.md
│ └── meta.json (cache metadata)
├── src/
│ ├── build.meta.json (cache metadata)
│ └── assets/
├── qa/
│ ├── cache.json (cache metadata)
│ └── report-template.md
├── output/
│ ├── log.md (version log — one line per snapshot)
│ └── v1/, v2/, … (created only when a page passes QA + final review)
└── reports/
└── journey-report-template.md


Fill in `/guidelines/*.md` yourself before your first run — the agents treat them as binding, not optional.

Run the full pipeline for a page with `/build-page <figma-frame-link>`.

---

# Author : Developed by Roshan

roshanMoolya
<roshanmoolya89@gmail.com>
