import {React, useState,useEffect} from 'react'
import { Filters, DifficultyFilter, SearchForm, MealTypeFilter, RecipeCard} from '../../components'


export default function BuildTheRecipe() {
    const [recipes,setRecipes] = useState([])
    const [mealType, setMealType] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [searchString1, setSearchString1] = useState('')
    const [searchString2, setSearchString2] = useState('')

    const filteredRecipes = Filters({recipes, mealType, difficulty,searchString1,searchString2})

    console.log("All recipes:", recipes.length);
    console.log("Filtered recipes:", filteredRecipes.length);
    console.log("Meal type:", mealType);
    console.log("Difficulty:", difficulty);
    console.log("Ingredient 1:", searchString1);
    console.log("Ingredient 2:", searchString2);

    useEffect (()=> {
        async function searchRecipe() {

            const response = await fetch (`https://dummyjson.com/recipes`)
            const Data = await response.json();
            //console.log(Data)
            setRecipes(Data.recipes);       
                 
        }
        searchRecipe();
        //console.log(searchRecipe)
    },[])


  return (
    <div>
        <SearchForm  setSearchString1={setSearchString1} setSearchString2={setSearchString2} />
        <MealTypeFilter mealType={mealType} setMealType={setMealType} />
        <DifficultyFilter difficulty={difficulty} setDifficulty={setDifficulty} />
        
        <div className="recipe-container">
            {filteredRecipes.map((item) => (
                <RecipeCard key={item.id} recipe={item} />
            ))}
        </div>
    </div>
  )
}
