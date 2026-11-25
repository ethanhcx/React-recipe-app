import React from 'react'

export default function DifficultyFilter({difficulty, setDifficulty}) {


  return (
    <select 
      name="difficulty" 
      id="difficulty-select"
      value={difficulty}
      onChange={(e) => setMealType(e.target.values)}
    >
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>        
    </select>
    )
}