# SikaRecipe

A full frontend recipe application built with React. Browse recipes, search by the ingredients you have, filter by difficulty and category, and save your favourites.

**Live site:** [add deployed link]

## Tech stack

- React (Vite)
- React Router
- [DummyJSON Recipes API](https://dummyjson.com/docs/recipes)
- CSS
- Render

## Pages and routes

| Route | Page |
|---|---|
| `/` | Home |
| `/buildrecipe` | Build a recipe |
| `/recipe` | Recommended recipes |
| `/recipe/:id` | Recipe details |
| `/favourites` | Saved favourites |
| `*` | Not found |

## Getting started

```bash
git clone https://github.com/ethanhcx/React-recipe-app.git
cd React-recipe-app
npm install
npm run dev
```

Then open the local URL printed in your terminal (usually `http://localhost:5173`). No API key is needed.

## Project structure

```
src/
├── components/   # Reusable components (Header, RecipeCard, FavouriteButton)
├── context/      # FavouritesContext: shared favourites state
├── pages/        # One component per route
├── App.jsx       # Routes
└── main.jsx      # Entry point (Router + FavouritesProvider)
```

## How it works

- **Data:** recipes come from the DummyJSON Recipes API.
- **Favourites:** a React context stores saved recipes and syncs them to localStorage, so they persist after a refresh.
- **Routing:** React Router with a shared `Header` layout and nested page routes.


## Future improvements

- [add ideas here]

## Acknowledgements

- Recipe data from [DummyJSON](https://dummyjson.com)