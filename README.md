# Figma-to-Code Agent Kit

Drop this folder structure into your project root (or merge it in if you already have one). See the setup PDF for connection steps and how to run the pipeline.

```
your-project/
├── .claude/
│   ├── agents/
│   │   ├── markdown-agent.md
│   │   ├── coding-agent.md
│   │   └── qa-agent.md
│   └── commands/
│       └── build-page.md (runs the full pipeline unattended via /build-page)
├── design/
│   ├── spec-shared.md (template — becomes real once markdown-agent runs)
│   ├── spec-template.md (reference structure for per-page specs)
│   └── spec.meta.json (cache metadata)
├── guidelines/
│   ├── global.md
│   ├── coding-agent.md
│   ├── qa-agent.md
│   └── meta.json (cache metadata)
├── src/
│   ├── build.meta.json (cache metadata)
│   └── assets/
├── qa/
│   ├── cache.json (cache metadata)
│   └── report-template.md
├── output/
│   ├── log.md (version log — one line per snapshot)
│   └── v1/, v2/, … (created only when a page passes QA + final review)
└── reports/
    └── journey-report-template.md
```

`/src` stays the single mutable working copy the cache logic diffs against. `/output/vN/` is a copy-on-ship snapshot, not a copy of every intermediate build — only the orchestrator writes there, and only after a page fully passes.

Fill in `/guidelines/*.md` yourself before your first run — the agents treat them as binding, not optional.

---

## Usage

Run the full pipeline for a page with:

```
/build-page <figma-frame-link>
```

## Force a fresh start (ignore all cached results) with `/reset-cache` — it clears cache metadata only, never your actual specs, code, or `/output/` history.ce a fresh start (ignore all cached results) with `/reset-cache` — it clears cache metadata only, never your actual specs, code, or `/output/` history

<<roshanmoolya89@gmail.co>
m>
