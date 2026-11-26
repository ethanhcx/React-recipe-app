import { React, useState, useEffect } from "react";
import {
  Filters,
  DifficultyFilter,
  SearchForm,
  MealTypeFilter,
  RecipeCard,
} from "../../components";

export default function BuildTheRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [mealType, setMealType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [searchString1, setSearchString1] = useState("");
  const [searchString2, setSearchString2] = useState("");

  const filteredRecipes = Filters({
    recipes,
    mealType,
    difficulty,
    searchString1,
    searchString2,
  });

  console.log("All recipes:", recipes.length);
  console.log("Filtered recipes:", filteredRecipes.length);
  console.log("Meal type:", mealType);
  console.log("Difficulty:", difficulty);
  console.log("Ingredient 1:", searchString1);
  console.log("Ingredient 2:", searchString2);

  useEffect(() => {
    async function searchRecipe() {
      const response = await fetch(`https://dummyjson.com/recipes`);
      const Data = await response.json();
      //console.log(Data)
      setRecipes(Data.recipes);
    }
    searchRecipe();
    //console.log(searchRecipe)
  }, []);

  return (
    <main className="build-recipe-page">
      <div className="build-recipe-heading">
        <span>LESS WASTE. MORE TASTE.</span>
        <h1>Build your recipe</h1>
        <p>
          Turn the ingredients you already have into something delicious. Find
          your next meal and make the most of your kitchen.
        </p>
      </div>

      <div className="recipe-search-panel">
        <h2>What's in your kitchen?</h2>
        <p>Enter your ingredients to discover matching recipes.</p>

        <SearchForm
          setSearchString1={setSearchString1}
          setSearchString2={setSearchString2}
        />

        <div className="recipe-filters">
          <div className="filter-group">
            <label>Meal type</label>
            <MealTypeFilter mealType={mealType} setMealType={setMealType} />
          </div>

          <div className="filter-group">
            <label>Difficulty</label>
            <DifficultyFilter
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </div>
        </div>
      </div>

      <div className="recipe-results-heading">
        <h2>Recommended recipes</h2>
        <p>{filteredRecipes.length} recipes found</p>
      </div>

      <div className="recipe-container">
        {filteredRecipes.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="no-recipes">
          <h3>No matching recipes found</h3>
          <p>Try different ingredients or change your filters.</p>
        </div>
      )}
    </main>
  );
}
