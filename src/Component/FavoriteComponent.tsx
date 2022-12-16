import { type } from "os";
import React from "react";
import { FavoriteRecipeType } from "../App";
type PropFitem = { favoriteitem: FavoriteRecipeType };

export default function FavoriteComponent({ favoriteitem }: PropFitem) {
  return (
    <div>
      <h1> hi si</h1> FavoriteComponent This is Favorite Item
      <p>Name: {favoriteitem.strMeal}</p>
      <p>Category: {favoriteitem.strCategory}</p>
      <img src={favoriteitem.strMealThumb} />
    </div>
  );
}
