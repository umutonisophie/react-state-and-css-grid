# Next.js Frontend Practice

A Next.js app used to practise React state and CSS Grid. The page renders a
nine-cell grid; the interesting part is what is explained in the comments.

![Next.js](https://img.shields.io/badge/Next.js-16-000000) ![React](https://img.shields.io/badge/React-19-087ea4)

## Running

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Verified against a clean production build.

## What it practises

**CSS Grid.** `app/home.css` lays out nine cells with `grid-template-columns`,
`gap` and a media query, so the column count changes with viewport width.

**React state.** The commented-out counter in `app/page.jsx` documents a bug
worth remembering:

```js
setCounter(counter + 1);
setCounter(counter + 20);
```

Both calls read the same `counter` from the same render, so the second
overwrites the first and `+1` is silently lost. The fix is a functional update,
`setCounter(c => c + 1)`, whenever the next value depends on the previous one.

The code is kept rather than deleted because the bug is the point of the
exercise.

## Why the name changed

The folder was called `next-frontend`, which describes the framework rather than
the project. It is now `react-state-and-css-grid`, which describes what it
teaches. Nothing referenced the old name.
