# Power or Wisdom?

Static Choice Duel game for BalaBharati.

## How to Run

From the repo root:

```bash
python3 -m http.server 8010
```

Open:

```text
http://127.0.0.1:8010/games/power-or-wisdom/
```

## How to Play

1. Show one situation card.
2. Kids vote:
   - `A = Choice A`
   - `B = Choice B`
3. Click `Reveal Lesson`.
4. Discuss the short value line.
5. Click `Next Round`.

Each round should take about `1-2` minutes.

## Data

`rounds.json` is the source of truth.

Each round has:

- `title`
- `situation`
- `powerMove`
- `wisdomMove`
- `value`
- `lesson`
- `explanation`
- `valueLine`

Keep text short, funny where natural, and non-preachy.

The game randomizes whether the wisdom answer appears as `A` or `B` each round.
