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
    let updateatribute = { ...item, quantity: 1 }; //adding new attribute

    let productindex = cartarray.findIndex((product) => {});
    setfavorite([...cartarray, item]); //adding the item to cart

    //console.log(cartarray);
  };

  return (
    <div>
      <div className="wrap_box1">
        <div>
          <p className="firstletter"> {recipe.strMeal.charAt(0)} </p>
        </div>
        <div>
          <p> {recipe.strIngredient1}</p>
          <p className="Name">{recipe.strMeal}</p>
        </div>
        {/*<p className="category">Category: {recipe.strCategory}</p>*/}
        <img src={recipe.strMealThumb} height="100px" />
        <div>
          <h3>Ingredients</h3>
        </div>
        <div>
          <p>
            1: {recipe.strMeasure1}:{recipe.strIngredient2}
          </p>
          <p>
            2:{recipe.strIngredient2}:{recipe.strMeasure2}
          </p>

          <p>
            3: {recipe.strIngredient3}:{recipe.strMeasure3}
          </p>

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
      </div>
    </div>
  );
}
