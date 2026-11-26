import React from "react";
import FavouriteButton from "../FavouriteButton";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h1 className="recipe-name">{recipe.name}</h1>
      <div className="recipe-badges">
            {recipe.mealType.map((type, index) => (
                <span key={index}>{type}</span>
            ))}

            <span className="difficulty-badge">
                {recipe.difficulty}
            </span>
      </div>
      <img className="recipe-image" src={recipe.image} alt={recipe.name} />
      <div className="recipe-actions">
        <FavouriteButton recipe={recipe} />
      </div>

      <div className="recipe-content">
        <div className="recipe-sidebar">
          <div className="ingredients-list">
            <h2 className="ingredients-heading">Ingredients</h2>
            <ul className="recipe-ingredients">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="recipe-info">
            <p className="calories-tag">
              Calories Per Serving: <strong>{recipe.caloriesPerServing}</strong>
            </p>
            <p className="time-tags">
              Prep time: <strong>{recipe.prepTimeMinutes} min</strong>
            </p>
            <p className="time-tags">
              Cook time: <strong>{recipe.cookTimeMinutes} min</strong>
            </p>
          </div>
        </div>

        <div className="recipe-list">
          <h2 className="recipe-steps-heading">Steps</h2>
          <ol className="recipe-steps">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;