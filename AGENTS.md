# AGENTS.md - BalaBharati

This repo hosts a small static GitHub Pages site for Indian kids.

## Project

`Balabharati` = `Bal` (kids) + `Bharati` (Indian / Bharatiya).

This repo is for:

- small browser-based games
- GitHub Pages hosting
- Zoom-friendly usage
- gradual improvement over time

## Product direction

The MVP is now live and should keep growing slowly.

Current product shape:

1. landing page
2. quiz library
3. hidden objects game
4. Hindu symbol tile puzzles
5. Hindu Symbols activity hub

Current quiz packs:

- Great People
- Hindu Symbols
- Festivals
- Ramayana
- Ramayana 20
- Mahabharata
- Mahabharata 20
- Values
- Sanskrit Words

## Core rules

- keep the site static: plain HTML, CSS, and JavaScript
- avoid frameworks unless there is a strong reason
- keep GitHub Pages compatibility simple
- keep reading load low for kids aged about `6-12`
- keep controls large, obvious, and touch-friendly
- keep the tone warm, confident, child-friendly, and non-preachy
- keep Hindu / Indian cultural grounding respectful, dharmic, and light
- keep quiz answers humble; avoid mocking, rude, harsh, or insulting distractors
- prefer dharmic framing: satya, seva, gratitude, respect, courage, humility, duty, and wise guidance
- avoid sectarian attacks, political flame-bait, and heavy lecture text
- do not add secrets or tokens

## Build rules

- build MVP slowly and safely
- do not overcomplicate the first version
- prefer working games over fancy structure
- prefer reusable static assets and downloaded/reused art over slow custom image generation
- if images would take too long to create, reuse or download suitable public-safe assets instead
- keep questions fun and simple for Hindu / Indian kids in English
- shuffle answer choices through the shared quiz engine
- keep short quiz packs easy and 20-question packs slightly harder with fewer hints
- for epic quizzes, focus on the epic as Indian / Sanskrit tradition and key story concepts, not random trivia
- do not blindly copy from Wikipedia or other web pages; use curated child-safe wording

## Engineering style

- simple code
- lightly commented
- modular enough to extend later
- avoid giant monolithic files
- prefer data-driven content where useful
- use the shared `assets/js/quiz.js` engine for quiz packs
- add new quiz pages under `games/quiz/<slug>/`
- add local static art under `assets/images/`

## Current site structure

- `index.html`: landing page
- `assets/css/main.css`: shared CSS
- `assets/js/quiz.js`: shared quiz engine and quiz data
- `assets/js/hidden-objects.js`: hidden objects game
- `assets/js/jigsaw.js`: tile puzzle engine
- `assets/images/`: local SVG art
- `games/quiz/`: quiz hub
- `games/quiz/great-people/`: Great People quiz
- `games/quiz/symbols/`: Hindu Symbols quiz
- `games/quiz/festivals/`: Festivals quiz
- `games/quiz/ramayana/`: short Ramayana quiz
- `games/quiz/ramayana-20/`: longer Ramayana quiz
- `games/quiz/mahabharata/`: short Mahabharata quiz
- `games/quiz/mahabharata-20/`: longer Mahabharata quiz
- `games/quiz/values/`: Values quiz
- `games/quiz/sanskrit/`: Sanskrit Words quiz
- `games/hidden-objects/`: hidden objects game
- `games/jigsaw/`: Hindu symbol tile puzzles
- `games/symbols/`: Symbols activity hub

## Current validation

- run `node --check assets/js/quiz.js`
- check local HTML references when adding pages
- preview with `python3 -m http.server 8010`
- verify GitHub Pages after push:
  - `https://mytestlab123.github.io/BalaBharati/`
