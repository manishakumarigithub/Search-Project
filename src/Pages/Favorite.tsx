import React from "react";
import FavoriteComponent from "../Component/FavoriteComponent";
import { FavoriteRecipeType } from "../App";
import { type } from "@testing-library/user-event/dist/type";
import FavoriteCart from "../Component/FavoriteCart";
type Favoriteprop = {
  favorites: FavoriteRecipeType[];
};

export default function Favorite({ favorites }: Favoriteprop) {
  //console.log(favorites, "f");
  return (
    <div>
      Favorite
      {favorites.map((item) => {
        return <FavoriteCart favoriteitem={item} />;
        console.log(item, "data from favorite");
      })}
    </div>
  );
}
