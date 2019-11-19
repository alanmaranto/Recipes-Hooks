import React, { useEffect, useState } from "react";
import Recipe from './Components/Recipe'
import "./App.css";

const App = () => {
  const APP_ID = "ad1b8912";
  const APP_KEY = "a68aad7b9632c4f8a2c6ee52ad806f15";

  const [recipes, setRecipes] = useState([]);
  const [ search, setSearch ] = useState('');
  const [query, setQuery] = useState('chicken');

  const Request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect( () => {
    getRecipies()
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(Request)
    const data = await response.json()
    console.log(data);
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
