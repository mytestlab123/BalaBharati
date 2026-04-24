# PLANS.md

Current task:
- turn the current single-quiz starter into the real Balabharati MVP

Current truth:
- repo exists at `mytestlab123/BalaBharati`
- GitHub Pages is configured from `main` branch root
- current site is now a static MVP with:
  - landing page
  - quiz library
  - Great People quiz
  - Symbols quiz
  - Festival quiz
  - Ramayana quiz
  - Mahabharata quiz
  - Values quiz
  - Sanskrit Words quiz
  - hidden objects game
  - Hindu symbol tile puzzles
  - Hindu Symbols hub

Working steps:
1. keep the repo static and GitHub Pages safe
2. refactor structure toward:
   - landing page
   - `games/quiz/`
   - `games/hidden-objects/`
   - `games/jigsaw/`
   - `assets/` for CSS, JS, data, and images
3. build MVP Game 1:
   - Great People of Bharat quiz
   - use simple English
   - starter figures:
     - Chhatrapati Shivaji Maharaj
     - Maharana Pratap
     - Guru Gobind Singh
4. build MVP Game 2:
   - one hidden-object scene
   - temple courtyard or simple Indian festive scene
   - 5 items:
     - bell
     - diya
     - lotus
     - peacock feather
     - modak
5. build MVP Game 3:
   - one easy tile puzzle
   - one simple culturally grounded image or symbol
6. improve README and roadmap for future extension
7. do not spend too long generating art
   - reuse or download static assets if needed

Success condition:
- home page works
- all 3 MVP games work
- site remains static and GitHub Pages friendly
- code stays simple enough for gradual future improvement

Progress:
- built the landing page and three MVP games
- moved shared styling and scripts under `assets/`
- used local SVG art so the site has no external asset dependency
- added extra quiz packs for symbols and festivals
- expanded jigsaw into lotus, diya, shankha, and trishul puzzles
- added a quiz hub plus Ramayana, Mahabharata, Values, and Sanskrit Words packs
