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
  const [userinput, setuserinput] = useState("");
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [favoriterecipe, setfavoriterecipe] = useState<FavoriteRecipeType[]>(
    []
  );
  console.log(favoriterecipe);
  const url = Apiurl + userinput;
  function getdata() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals));
  }
  useEffect(() => {
    getdata();
  }, [url]);
  //console.log(recipes, "data");

  return (
    <div className="App">
      <div>R</div>

      <div>
        <Navbar></Navbar>

        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route
            path="recipe"
            element={<Recipe recipes={recipes}></Recipe>}
          ></Route>
          <Route
            path="favorite"
            element={<Favorite favorites={favoriterecipe}></Favorite>}
          ></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
