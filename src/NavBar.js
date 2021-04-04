import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/**
 * Component for displaying navigation bar
 * @returns JSX code for rendering navigation bar
 */
const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact to="/">Product Listing</NavLink>
      <NavLink exact to="/cart">Cart</NavLink>
    </div>
  );
};

export default NavBar;