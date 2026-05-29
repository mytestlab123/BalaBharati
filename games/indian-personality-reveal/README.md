# Guess the Great Indian Personality

Static classroom game for BalaBharati.

## How to Run

From the repo root:

```bash
python3 -m http.server 8010
```

Open:

```text
http://127.0.0.1:8010/games/indian-personality-reveal/
```

The game is plain HTML, CSS, and JavaScript. It has no login, backend, database, or build step.

## How to Play

1. Press `Start`.
2. The photo reveals in 16 random tiles.
3. One clue unlocks after every 4 revealed tiles.
4. Kids guess the personality as more tiles and clues appear.
5. Press `Pause` to invite guesses.
6. Press `Reveal Now` to show the answer immediately.
7. Press `Next Personality` for another round.
8. Press `Reset` to cover the current photo again.

## Data Source

`personalities.json` is the source of truth for this game.

Each personality entry should include:

- `name`
- `years`
- `category`
- `contribution`
- `whyTheyMatter`
- `imageUrl`
- `imageSource`
- `imageSourceLabel`
- `licenseSourceNote`

Do not hardcode personality data inside `game.js`.

## Adding a Personality

1. Add a suitable image under `images/`.
2. Add a new object to `personalities.json`.
3. Keep contribution lines short and classroom-friendly.
4. Prefer Wikimedia Commons, official government, Nobel, sports federation, or trusted institutional image sources.
5. Avoid non-free or unclear images.
6. Test the page locally.

## Image Attribution

The game shows image attribution in the `Image attribution` panel. Keep `imageSource` pointed at the file or institutional source page, not only the raw image URL.

Most MVP images are from Wikimedia Commons file pages. The JSON includes a short source note, but the source page remains the final place to verify author, license, and reuse details.

## MVP Selection Notes

Mother Teresa is not included, as requested.

The first MVP uses 16 personalities with available public image candidates. Some people from the larger list were skipped for this round to keep the first game small and avoid weak image matches:

- Lal Bahadur Shastri: skipped because the automated page-image lookup returned a wrong-person image candidate.
- Ratan Tata: skipped to keep MVP at 16.
- Sachin Tendulkar: skipped to keep MVP at 16.
