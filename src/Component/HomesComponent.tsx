import React from "react";
import backgroundimg from "../assets/food.jpeg";

import Cake from "../assets/cake.png";
import shrimp from "../assets/shrimp.png";
import pizza from "../assets/pizza.webp";
import salad from "../assets/salad.png";
import chicken from "../assets/chicken.png";
import "./HomeComponent.css";

export default function HomesComponent() {
  return (
    <div>
      <div>
        <img
          src={backgroundimg}
          className="backgroundimage"
          height="500px"
          width="100%"
        ></img>
        <div className="home_body">
          <p className="home-head">Healty delicious recipes</p>
        </div>
      </div>
      <div>
        <p className="popular">Popular food</p>{" "}
        <p>
          We provides a variety of food and beverage recipes with height taste
          from famous chefs
        </p>
      </div>
      <div className="popular-images">
        <img
          src={Cake}
          alt="cake"
          height="150px"
          className="popular-images1"
        ></img>

        <img
          src={shrimp}
          alt="shrimp"
          height="150px"
          className="popular-images1"
        />
        <img
          src={pizza}
          alt="pizza"
          height="150px"
          className="popular-images1"
        />
        <img
          src={salad}
          alt="salad"
          height="150px"
          className="popular-images1"
        />
        <img
          src={chicken}
          alt="chicken"
          height="150px"
          width="160px"
          className="popular-images1"
        />
      </div>
    </div>
  );
}
