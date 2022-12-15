import React from "react";
import cheflogo from "../assets/chef.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="Wrap_box">
      <div>
        <img src={cheflogo} alt="image" height="80px" width="100px"></img>
      </div>
      <div>
        <h1>YUMMY</h1>
      </div>

      <div>
        <Link to="/" className="link1">
          <strong>Home</strong>
        </Link>
      </div>
      <div>
        <Link to="/recipe" className="link2">
          <strong>Recipe</strong>
        </Link>
      </div>
      <div>
        <Link to="/favorite" className="link3">
          <strong>Favorite</strong>
        </Link>
      </div>
      <div>
        <Link to="contact" className="link4">
          {" "}
          <strong>Contact</strong>
        </Link>
      </div>
    </div>
  );
}
