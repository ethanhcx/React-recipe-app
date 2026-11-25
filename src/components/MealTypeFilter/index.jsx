import React from 'react'

export default function MealTypeFilter({mealType, setMealType}) {

  return (
    <select 
      name="mealType" 
      id="mealType-select"
      value={mealType}
      onChange={(e) => setMealType(e.target.value)}
    >
      <option value="">Meal Type</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
        
    </select>
    )
}
