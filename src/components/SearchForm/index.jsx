import React, { useEffect, useState } from 'react'



export default function SearchForm({setSearchString1, setSearchString2}) {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

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
    </div>
  )
}

