import React from 'react'
import SearchForm from '../SearchForm'


export default function Filters({recipes, match1, match2, difficulty, mealType}) {

  const difficultyFilter = recipes.filter((item) => {
      const matchDifficulty = item.difficulty
      const matchMealType = item.
  })

  return (
    <div>Filters</div>
  )
}
