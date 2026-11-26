# SikaRecipe

A full frontend recipe application built with React. Browse recipes, search by the ingredients you have, filter by difficulty and category, and save your favourites.

**Live site:** [https://react-recipe-app-xtcv.onrender.com/]

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
| `/explore` | Explore recipes |
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

## Future improvements

- Match several ingredients at once and show which ones are missing
- Filter by cuisine and meal type, and sort by rating or cooking time
- User accounts so favourites sync across devices
- Shopping list built from saved recipes
- Serving size adjuster that rescales ingredients
- Loading skeletons and clearer error messages
- Dark mode and a full accessibility audit
- More automated tests

## Acknowledgements

- Recipe data from [DummyJSON](https://dummyjson.com)
