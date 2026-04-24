# BalaBharati

Simple browser games for Indian kids.

## Purpose

- host a small static site on GitHub Pages
- make simple fun games for Indian / Hindu kids
- keep the repo easy to run locally and easy to extend later
- support family, community, and Zoom-style sessions

## Current state

The repo has a static GitHub Pages MVP with:

1. landing page at `index.html`
2. quiz library at `games/quiz/`
3. Great People quiz at `games/quiz/great-people/`
4. Symbols quiz at `games/quiz/symbols/`
5. Festival quiz at `games/quiz/festivals/`
6. Ramayana quiz at `games/quiz/ramayana/`
7. Mahabharata quiz at `games/quiz/mahabharata/`
8. Values quiz at `games/quiz/values/`
9. Sanskrit Words quiz at `games/quiz/sanskrit/`
10. hidden objects game at `games/hidden-objects/`
11. Hindu symbol tile puzzles at `games/jigsaw/`
12. Hindu Symbols hub at `games/symbols/`

## MVP direction

Design for:

- age `6-12`
- low reading load
- large buttons
- clear feedback
- simple interaction
- warm Indian cultural grounding

Keep the tone:

- child-friendly
- respectful
- proud but not aggressive
- simple and playful

## Tech rules

- plain HTML
- plain CSS
- plain JavaScript
- static files only
- GitHub Pages friendly

Avoid heavy frameworks unless there is a strong need.

## Repo layout

- `index.html`: landing page with game links
- `assets/css/main.css`: shared site and game styles
- `assets/js/`: game scripts
- `assets/images/`: local SVG game art
- `games/quiz/`: quiz library
- `games/quiz/great-people/`: Great People quiz
- `games/quiz/symbols/`: Hindu Symbols quiz
- `games/quiz/festivals/`: Festival quiz
- `games/quiz/ramayana/`: Ramayana quiz
- `games/quiz/mahabharata/`: Mahabharata quiz
- `games/quiz/values/`: Values quiz
- `games/quiz/sanskrit/`: Sanskrit Words quiz
- `games/hidden-objects/`: hidden objects scene
- `games/jigsaw/`: Hindu symbol tile puzzles
- `games/symbols/`: symbols activity hub
- `docs/ROADMAP.md`: future game ideas

## Local preview

```bash
cd /home/dev/git/BalaBharati
python3 -m http.server 8010
```

Then open `http://127.0.0.1:8010`.

## GitHub Pages

This repo is published from:

- branch: `main`
- folder: `/ (root)`

Public URL target:

- `https://mytestlab123.github.io/BalaBharati/`

## Repo notes

- `AGENTS.md`: repo rules and build direction
- `PLANS.md`: active MVP task
- `page.md`: detailed build brief for the next Codex session
- `docs/ROADMAP.md`: future game ideas

## Build philosophy

- build MVP
- improve slowly
- do not overbuild
- reuse or download assets if custom image generation would take too long
