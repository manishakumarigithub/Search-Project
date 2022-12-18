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
  setRecipes,
  favoritecart,
  setfavorite,
}: Usersrecipe) {
  const [userInput, setUserInput] = useState("");
  const [filteredrecipe, setFilterdRecipe] = useState<FavoriteRecipeType[]>([]);
  let useroutput: RecipeType[];
  if (userInput) {
    useroutput = recipes.filter((item) =>
      item.strMeal.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
    );
  } else {
    useroutput = recipes;
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
        {useroutput.map((item) => {
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
