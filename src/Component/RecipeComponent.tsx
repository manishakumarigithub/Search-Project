import React from "react";
import { RecipeType } from "../App";
import "./RecipeComponent.css";
type RecipePropType = {
  recipe: RecipeType;
};
export default function RecipeComponent({ recipe }: RecipePropType) {
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
    </div>
  );
}
