import React from "react";
import "./App.css";
import Recipe from "./Pages/Recipe";
import Favorite from "./Pages/Favorite";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="recipe" element={<Recipe></Recipe>}></Route>
        <Route path="favorite" element={<Favorite></Favorite>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
