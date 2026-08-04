# Figma-to-code agent kit

Drop this folder structure into your project root (or merge it in if you already have one). See the setup PDF for connection steps and how to run the pipeline.

```
your-project/
├── .claude/
│   ├── agents/
│   │   ├── markdown-agent.md
│   │   ├── coding-agent.md
│   │   └── qa-agent.md
│   └── commands/
│       ├── build-page.md       (runs the full pipeline unattended via /build-page)
│       └── reset-cache.md      (clears cache metadata for a fresh start via /reset-cache)
├── design/
│   ├── spec-shared.template.md (tracked — blank starting point per project)
│   ├── spec-shared.md          (git-ignored — real tokens, created per project on first run)
│   ├── spec-template.md        (reference structure for per-page specs)
│   └── spec.meta.json          (cache metadata — git-ignored)
├── guidelines/
│   ├── global.md
│   ├── coding-agent.md
│   ├── qa-agent.md
│   └── meta.json               (cache metadata — git-ignored)
├── src/
│   ├── build.meta.json         (cache metadata — git-ignored)
│   └── assets/                 (git-ignored)
├── qa/
│   ├── cache.json              (cache metadata — git-ignored)
│   └── report-template.md
├── output/
│   ├── log-template.md         (tracked — blank starting point per project)
│   ├── log.md                  (git-ignored — real version log, created per project on first run)
│   └── v1/, v2/, …             (git-ignored — created only when a page passes QA + final review)
└── reports/
    └── journey-report-template.md
```

`/src` stays the single mutable working copy the cache logic diffs against. `/output/vN/` is a copy-on-ship snapshot, not a copy of every intermediate build — only the orchestrator writes there, and only after a page fully passes.

Fill in `/guidelines/*.md` yourself before your first run — the agents treat them as binding, not optional.

Run the full pipeline for a page with `/build-page <figma-frame-link>`.

Force a fresh start (ignore all cached results) with `/reset-cache` — it clears cache metadata only, never your actual specs, code, or `/output/` history.

## Using this as a public template
The included `.gitignore` keeps only the reusable skeleton tracked — templates, agent/command definitions, and guidelines — while every real project's generated content (filled specs, cache hashes, build output, QA reports, version history) stays out of the repo. On first run per project, agents copy `spec-shared.template.md` → `spec-shared.md` and `log-template.md` → `log.md` rather than editing the tracked template files directly, so cloning this repo for a new project always starts from a clean slate.

---
Developed by Roshan.
