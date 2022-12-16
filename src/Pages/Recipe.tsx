import React from "react";
import RecipeComponent from "../Component/RecipeComponent";
import { RecipeType } from "../App";

type Usersrecipe = {
  recipes: RecipeType[];
};

export default function Recipe({ recipes }: Usersrecipe) {
  //console.log(recipes, "ppp");

  return (
    <div>
      List
      {recipes.map((item) => {
        return <RecipeComponent recipe={item} />;
      })}
    </div>
  );
}
