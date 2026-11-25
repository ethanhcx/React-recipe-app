import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { Header } from "./components";
import RecipeCard from "./components/RecipeCard";
import './App.css'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/buildrecipe" element={<Pages.BuildRecipePage />} />
        <Route path="/recipe" element={<Pages.RecommendedRecipePage />} />
        <Route path="/recipe/:id" element={<Pages.RecipePage />} />
        <Route path="/favourites" element={<Pages.FavouritesPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
