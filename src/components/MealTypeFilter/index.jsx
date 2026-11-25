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
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="snack">Snack</option>
        
    </select>
    )
}
