import { type } from "os";
import React from "react";
import { FavoriteRecipeType } from "../App";
type PropFitem = { favoriteitem: FavoriteRecipeType };

export default function FavoriteComponent({ favoriteitem }: PropFitem) {
  return (
    <div>
      FavoriteComponent This is Favorite
      <p>Name: {favoriteitem.strMeal}</p>
      <p>Category: {favoriteitem.strCategory}</p>
      <img src={favoriteitem.strMealThumb} height="60px" />
    </div>
  );
}
