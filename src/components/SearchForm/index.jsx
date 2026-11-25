import React, { useEffect, useState } from 'react'


export default function SearchForm() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [searchString1, setSearchString1] = useState('Pasta')
    const [searchString2, setSearchString2] = useState('Garlic')
    const [recipes,setRecipes] = useState([])

    useEffect (()=> {
        async function searchRecipe() {

            const response = await fetch (`https://dummyjson.com/recipes`)
            const Data = await response.json();
            setRecipe(Data.recipes);            
        }
        searchRecipe();
    },[])

    let filteredRecipes = recipes.filter((item) => {

    const match1 = item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchString1.toLowerCase().trim())
    );

    const match2 = item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchString2.toLowerCase().trim())
    );

    return match1 && match2;
}); 

    function handleInput1(e) {
            const newInput1 = e.target.value;
            setInputValue1(newInput1);

        }
    
    function handleInput2(e) {
            const newInput2 = e.target.value;
            setInputValue2(newInput2);

        }
    
    function handleSubmit(e) {
            e.preventDefault();
            setSearchString1(inputValue1);
            setSearchString2(inputValue2);
            setInputValue1('');
            setInputValue2('');
        }
    
  return (
    <div>
        <form id="search-form" onSubmit={handleSubmit}>
            <input type="text"
                placeholder='Ingredient 1'
                value={inputValue1} 
                onChange={handleInput1}
            />

            <input type="text"
                placeholder='Ingredient 2'
                value={inputValue2} 
                onChange={handleInput2}
            />
            <input type="submit" value='Search' />
        </form>
        <div >
        {filteredRecipes.map((item) => (
            <div key={item.id} className="recipe-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
            </div>
        ))}
        </div>
    </div>
  )
}

