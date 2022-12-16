import React from "react";
import RecipeComponent from "../Component/RecipeComponent";
import { RecipeType } from "../App";
import { Form } from "react-router-dom";

type Usersrecipe = {
  recipes: RecipeType[];
  value: string;
};

export default function Recipe({ recipes }: Usersrecipe) {
  //console.log(recipes, "ppp");

  return (
    <div>
      List
      <div>
        <form>
          <input></input>
          bu
        </form>
      </div>
      <div className="container">
        {recipes.map((item) => {
          return <RecipeComponent recipe={item} />;
        })}
      </div>
    </div>
  );
}
