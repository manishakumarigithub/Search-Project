import React from "react";
import RecipeComponent from "../Component/RecipeComponent";
import { RecipeType } from "../App";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { FavoriteRecipeType } from "../App";
import SearchForm from "../Component/SearchForm";

type Usersrecipe = {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeType[]>>;
  recipes: RecipeType[];
  favoritecart: FavoriteRecipeType[];
  setfavorite: React.Dispatch<React.SetStateAction<FavoriteRecipeType[]>>;
};

export default function Recipe({
  recipes,
  favoritecart,
  setRecipes,
  setfavorite,
}: Usersrecipe) {
  //destructuring of prop

  const [userInput, setUserInput] = useState("");
  //state for userinput
  let Result: RecipeType[];
  //Result means whatever user giving input in the text after that outcome
  if (userInput) {
    Result = recipes.filter((item) =>
      item.strMeal.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
    );
  } else {
    Result = recipes;
  }

  {
  }

  return (
    <div>
      <div>
        <SearchForm
          userInput={userInput}
          setUserInput={setUserInput}
        ></SearchForm>
      </div>
      <div className="container">
        {/* mappig data to the RecipeCpmponent*/}
        {Result.map((item) => {
          return (
            <RecipeComponent
              key={item.idMeal}
              recipe={item}
              favoritecart={favoritecart}
              setfavorite={setfavorite}
            />
          );
        })}
      </div>
    </div>
  );
}
