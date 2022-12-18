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
}; //type of each objet which is present in between the array
export type FavoriteRecipeType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
};

const Apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  // state for rendering data in recipe component
  const [favoriteCart, setfavoriteCart] = useState<FavoriteRecipeType[]>([]);
  //state for adding fav recipe to fav cart

  function getdata() {
    fetch(Apiurl)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals));
  }

  useEffect(() => {
    getdata();
  }, []);
  // console.log(recipes, "recipe");getting data in console it is array of object

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
                recipes={recipes} //passing array here but it will give object in prop
                setRecipes={setRecipes}
                favoritecart={favoriteCart}
                setfavorite={setfavoriteCart} //passing function
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
