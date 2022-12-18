import React from "react";
import "./App.css";
import Recipe from "./Pages/Recipe";
import Favorite from "./Pages/Favorite";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import RecipeComponent from "./Component/RecipeComponent";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
export type RecipeType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient1: string;
  strMeasure1: string;
  strIngredient2: string;
  strMeasure2: string;

  strIngredient3: string;
  strMeasure3: string;
};
export type FavoriteRecipeType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
};

const Apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [favoriteCart, setfavoriteCart] = useState<FavoriteRecipeType[]>([]);

  //console.log(favoriterecipe);
  //const url = Apiurl + userinput;

  function getdata() {
    fetch(Apiurl)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals));
  }
  let result;
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar></Navbar>

        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route
            path="recipe"
            element={
              <Recipe
                recipes={recipes}
                setRecipes={setRecipes}
                favoritecart={favoriteCart}
                setfavorite={setfavoriteCart}
              />
            }
          ></Route>
          <Route
            path="favorite"
            element={<Favorite favoritecart={favoriteCart}></Favorite>}
          ></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
