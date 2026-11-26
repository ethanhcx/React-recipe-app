import React from 'react'


export default function Filters({recipes, difficulty, mealType, searchString1, searchString2}) {


  const Filter = recipes.filter((item) => {
        // let filteredRecipes = recipes.filter((item) => {

    const match1 = item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchString1.toLowerCase().trim())
    );

    const match2 = item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchString2.toLowerCase().trim())
    );
 
    const matchDifficulty = !difficulty || item.difficulty === difficulty
    // difficulty === '' || item.difficulty === difficulty;


    const matchMealType = !mealType || item.mealType.includes(mealType);

    const results = match1 && match2 && ( matchDifficulty && matchMealType)
    console.log(results)
  return results

        })

  return (
    Filter
  )
}
