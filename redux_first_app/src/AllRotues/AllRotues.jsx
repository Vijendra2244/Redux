import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AddToCart from "../components/AddToCart";
import User from "../components/User";
import Theme from "../components/Theme";


function AllRotues() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/user" element={<User />} />
        <Route path="/theme" element={<Theme/>} />
      </Routes>
    </div>
  );
}

export default AllRotues;
