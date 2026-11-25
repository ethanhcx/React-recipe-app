import { React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard'
import './recipepage.css'

function RecipePage() {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function displayRecipe() {
            const response = await fetch(`https://dummyjson.com/recipes/${id}`)
            const data = await response.json()
            setRecipe(data)
        }
        displayRecipe();
    }, [id]) 

    if (!recipe) {
        return <p>Loading...</p>
    }

    return (
        <RecipeCard recipe={recipe} />
    )
}

export default RecipePage;