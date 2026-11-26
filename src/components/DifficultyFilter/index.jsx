import React from 'react'

export default function DifficultyFilter({difficulty, setDifficulty}) {

  return (
    <select 
      name="difficulty" 
      id="difficulty-select"
      value={difficulty}
      onChange={(e) => setDifficulty(e.target.value)}
    >
      <option value="">Difficulty</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>        
    </select>
    )
}