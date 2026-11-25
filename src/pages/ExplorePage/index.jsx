import React, { useState, useEffect } from "react";
import SearchBarExplore from "../../components/SearchBarExplore";
import "./explorepage.css";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();

      setRecipes(data.recipes);
    }

    getRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="explore-page">
      <h1>Explore all available recipes</h1>

      <SearchBarExplore searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            className="recipe-card"
            key={recipe.id}
          >
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
