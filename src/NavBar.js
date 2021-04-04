import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact to="/">Product Listing</NavLink>
      <NavLink exact to="/cart">Cart</NavLink>
    </div>
  );
};

export default NavBar;