import React from 'react'

export default function DifficultyFilter({difficulty, setDifficulty}) {

  return (
    <select 
      name="difficulty" 
      id="difficulty-select"
      value={difficulty}
      onChange={(e) => setDifficulty(e.target.value)}
    >
      <option value="">Diffiulty</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>        
    </select>
    )
}