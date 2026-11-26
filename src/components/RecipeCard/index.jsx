import React from "react";




function RecipeCard({ recipe }) {

    return (
        <div className="recipe-card">
            <h1 className="recipe-name">{recipe.name}</h1>
            <img className="recipe-image" src={recipe.image} />
                <div className="recipe-list">
                    <h2 className="recipe-steps-heading">Steps</h2>
                    <ol className="recipe-steps">
                        {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
        </div>
    )
}

export default RecipeCard;