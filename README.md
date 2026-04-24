# BalaBharati

Simple GitHub Pages Q&A game for kids.

## Purpose

- host a small colorful question-and-answer game
- keep the repo static and simple
- publish directly with GitHub Pages from the `main` branch

## Repo layout

- `index.html`: app shell
- `style.css`: page styling
- `script.js`: quiz logic and question set
- `AGENTS.md`: repo rules
- `AGENTS.override.md`: local/private override copied from `~/.codex`
- `PLANS.md`: active plan
- `docs/ROADMAP.md`: next improvements

## Local preview

Open `index.html` in a browser, or run a simple static server:

```bash
cd /home/dev/git/BalaBharati
python3 -m http.server 8010
```

Then open `http://127.0.0.1:8010`.

## GitHub Pages

This repo is meant to publish directly from:

- branch: `main`
- folder: `/ (root)`

## First version

- one question at a time
- multiple-choice answers
- instant feedback
- score tracking
- play again button
