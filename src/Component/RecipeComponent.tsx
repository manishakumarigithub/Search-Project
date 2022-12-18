import React from "react";
import { RecipeType } from "../App";
import { FavoriteRecipeType } from "../App";
import "./RecipeComponent.css";
type RecipePropType = {
  recipe: RecipeType;
  favoritecart: FavoriteRecipeType[];
  setfavorite: React.Dispatch<React.SetStateAction<FavoriteRecipeType[]>>;
};
export default function RecipeComponent({
  recipe,
  favoritecart,
  setfavorite,
}: RecipePropType) {
  const addproduct = (item: any) => {
    //console.log(item);
    let cartarray = [...favoritecart];
    //copy the  current cart

    //let updatearray = [...cartarray, item];
    // current arry and adding new
    //console.log(item);
    let updateatribute = { ...item, quantity: 1 };

    let productindex = cartarray.findIndex((product) => {});
    setfavorite([...cartarray, item]);

    //console.log(cartarray);
  };

  return (
    <div>
      RecipeCart
      <p className="firstletter">First letter: {recipe.strMeal.charAt(0)} </p>
      <p className="Name">Name: {recipe.strMeal}</p>
      <p className="category">Category: {recipe.strCategory}</p>
      <img src={recipe.strMealThumb} height="100px" />
      <p>Ingredient1: {recipe.strIngredient1}</p>
      <p>Measure1: {recipe.strMeasure1}</p>
      <p>Ingredient2: {recipe.strIngredient2}</p>
      <p>Measure2: {recipe.strMeasure2}</p>
      <p>Ingredient3: {recipe.strIngredient3}</p>
      <p>Measure3: {recipe.strMeasure3}</p>
      <div>
        <button
          onClick={() => {
            addproduct(recipe);
          }}
        >
          add to favorite
        </button>
      </div>
    </div>
  );
}
