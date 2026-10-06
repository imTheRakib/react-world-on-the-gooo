# React World On The Go

A React app that fetches data for every country in the world and shows each one as a card in a responsive grid.

**Live site:** [react-world-on-the-gooo-eight.vercel.app](https://react-world-on-the-gooo-eight.vercel.app/)

## Features

- Loads all 250 countries from the [Programming Hero countries API](https://openapi.programming-hero.com/api/all)
- Shows each country's flag, name, capital, region and population
- Responsive grid: 1 column on phones, 2 on tablets, 3 on larger screens
- Loading spinner while the data is being fetched

## Built with

- [React 19](https://react.dev/): uses the `use()` hook with `<Suspense>` for data fetching
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [daisyUI 5](https://daisyui.com/)
- Deployed on [Vercel](https://vercel.com/)

## Run it locally

```bash
git clone <your-repo-url>
cd react-world-on-the-go
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
src/
├── App.jsx                       # Fetches countries, wraps the list in <Suspense>
├── main.jsx                      # App entry point
├── index.css                     # Tailwind + daisyUI imports
└── components/
    ├── Countries/Countries.jsx   # Reads the promise with use() and renders the grid
    └── Country/Country.jsx       # A single country card
```
