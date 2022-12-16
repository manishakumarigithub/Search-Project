import React from "react";
import { FavoriteRecipeType } from "../App";
type PropFitem = { favoriteitem: FavoriteRecipeType };
export default function FavoriteCart({ favoriteitem }: PropFitem) {
  console.log(favoriteitem, "item from cart");
  return (
    <div>
      FavoriteCart item
      <div>
        <h1> hi si</h1> FavoriteComponent This is Favorite Item
      </div>
    </div>
  );
}
