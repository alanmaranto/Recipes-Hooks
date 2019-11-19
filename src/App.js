import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "ad1b8912";
  const APP_KEY = "a68aad7b9632c4f8a2c6ee52ad806f15";

  const Request = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect( () => {
    getRecipies()
  }, []);

  const getRecipies = async () => {
    const response = await fetch(Request)
    const data = await response.json()
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
