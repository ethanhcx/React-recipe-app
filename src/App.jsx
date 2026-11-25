import RecipeCard from "./components/RecipeCard";
import './App.css'


const data = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot.",
    ],
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  },
];

function App() {
  return (
    <RecipeCard recipe={data[0]}/>
  )
}

import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { Header } from "./components";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/buildrecipe" element={<Pages.BuildRecipePage />} />
        <Route
          path="/recipe"
          element={<Pages.RecommendedRecipePage />}
        />
        <Route path="/recipe/:id" element={<Pages.RecipePage />} />
        <Route path="/favourites" element={<Pages.FavouritesPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;