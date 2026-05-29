# PLANS.md

Last saved context: 2026-05-29

## Current task state

The BalaBharati MVP is live on GitHub Pages:

- repo: `mytestlab123/BalaBharati`
- branch: `main`
- Pages root: `/`
- public URL: `https://mytestlab123.github.io/BalaBharati/`

The site is static:

- plain HTML
- plain CSS
- plain JavaScript
- no framework
- no build step

## Current live product

1. landing page
2. quiz hub
3. Great People quiz
4. Hindu Symbols quiz
5. Festivals quiz
6. Ramayana quiz
7. Ramayana 20 quiz
8. Mahabharata quiz
9. Mahabharata 20 quiz
10. Yaksha Prashna quiz
11. Buddha Life quiz
12. Values quiz
13. Sanskrit Words quiz
14. hidden objects courtyard game
15. Hindu symbol tile puzzles
16. Hindu Symbols activity hub
17. curated News section on the home page
18. Great Indian Personality photo reveal game

## Important content rules

- audience is Indian / Hindu kids, roughly age `5-12`
- keep language simple, warm, and child-safe
- keep answers humble and dharmic
- avoid rude, mocking, harsh, or insulting distractor answers
- prefer themes like:
  - dharma
  - satya
  - seva
  - gratitude
  - respect
  - humility
  - courage
  - duty
  - wise guidance
- do not blindly copy from Wikipedia or web pages
- for Ramayana and Mahabharata, use curated kid-safe wording focused on the epic itself
- for personality photo games, keep `personalities.json` as the source of truth and keep image attribution visible

## Quiz implementation notes

- shared quiz engine lives in `assets/js/quiz.js`
- quiz answer choices are shuffled by the shared engine
- new quiz pages should go under `games/quiz/<slug>/`
- every quiz question should have exactly 4 choices
- each question should have one clear correct answer
- success feedback should include a simple lesson where useful
- fixed A/B/C/D answer keys do not work on the site because choices shuffle

## Current quiz routes

- `games/quiz/great-people/`
- `games/quiz/symbols/`
- `games/quiz/festivals/`
- `games/quiz/ramayana/`
- `games/quiz/ramayana-20/`
- `games/quiz/mahabharata/`
- `games/quiz/mahabharata-20/`
- `games/quiz/yaksha-prashna/`
- `games/quiz/buddha-life/`
- `games/quiz/values/`
- `games/quiz/sanskrit/`

## Current non-quiz game routes

- `games/indian-personality-reveal/`
- `games/hidden-objects/`
- `games/jigsaw/`
- `games/symbols/`

## News section notes

The home page has a `News` section with recent India / Singapore links.

The user preferred the Hindustan Times story about Maharashtra students earning NASA / ISRO visits as the best kind of news for kids.

Future news should bias toward:

- student achievement
- science or space
- school innovation
- school sports with effort and teamwork
- clear value for kids age `5-10`

Avoid broad policy-only news unless it is easy for kids to understand.

## Local preview

Default preview command:

```bash
python3 -m http.server 8010 --bind 127.0.0.1
```

Use this only when needed. Do not leave the server running after validation unless the user asks.

Past LAN preview convention:

```text
http://192.168.0.9:8010/
0.0.0.0:8010
```

If using the LAN preview, store PID/log state under:

```text
~/.AGENTS-temp/BalaBharati/
```

## Validation checklist

Before commit/push:

1. run `node --check assets/js/quiz.js`
2. run local HTML reference check
3. run local HTTP check for changed pages
4. stop any temporary preview server
5. confirm `git status --short --branch`

After push:

1. poll the GitHub Pages URL until the changed page is live
2. verify the public page and public `assets/js/quiz.js` if quiz content changed
3. confirm working tree is clean

## Next useful work

1. Build `Power or Wisdom?`, a Choice Duel game for ages `6-12`.
   - one situation card per round
   - kids vote `A = Power Move` or `B = Wisdom Move`
   - reveal why wisdom is real strength
   - values: Dharma, Viveka, Shanti, Satya, Seva
   - keep each round `1-2` minutes
2. Add difficulty labels on quiz cards:
   - Easy
   - 20 Questions
   - Fewer Hints
3. Add 20-question packs for:
   - Hindu Symbols
   - Festivals
   - Great People
   - Sanskrit Words
4. Add progress badges after quiz completion.
5. Add a parent / teacher note page.
6. Review all existing quizzes for consistent dharmic wording.
