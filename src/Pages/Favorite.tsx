import React from "react";
import FavoriteComponent from "../Component/FavoriteComponent";
import { FavoriteRecipeType } from "../App";

import { type } from "@testing-library/user-event/dist/type";

type Props = {
  favoritecart: FavoriteRecipeType[];
};
export default function Favorite({ favoritecart }: Props) {
  //console.log(favoritecart, "f");
  return (
    <div>
      <div className="fav_container">
        {favoritecart.map((cartitem) => {
          return (
            <FavoriteComponent key={cartitem.idMeal} favoriteitem={cartitem} />
          );
        })}
      </div>
    </div>
  );
}
