import React from "react";
import { Link } from "react-router-dom";
import "./recipeGallery.css";
import { Users } from "lucide-react";

export default function RecipeGallery({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          className="recipe-card"
          key={recipe.id}
        >
          <div className="recipe-badges">
            {recipe.mealType.map((type, index) => (
              <span key={index}>{type}</span>
            ))}

            <span className="difficulty-badge">{recipe.difficulty}</span>
          </div>
          <img src={recipe.image} alt={recipe.name} />
          <h2>{recipe.name}</h2>
          <p className="servings">
            <Users size={16} />
            Serves {recipe.servings}
          </p>
        </Link>
      ))}
    </div>
  );
}
