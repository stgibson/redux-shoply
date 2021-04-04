import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "./actions";
import "./Product.css";

/**
 * Component for displaying a product in a list, along with buttons to add or
 * remove the product from the user's cart
 * @param {Object{string|Object{string|number}}} param0 
 * @returns JSX code for rendering a product
 */
const Product = ({ id, product }) => {
  const dispatch = useDispatch();

  /**
   * Adds product to cart
   */
  const handleAddToCart = () => dispatch(addToCart(id, product));

  /**
   * Removes product from cart
   */
  const handleDeleteFromCart = () => dispatch(deleteFromCart(id));

  return (
    <div className="Product">
      <Link to={ `/products/${id}` }>
        { `${product.name}: $${product.price}` }
      </Link>
      <button onClick={ handleAddToCart }>Add to cart!</button>
      <button onClick={ handleDeleteFromCart }>Remove from cart!</button>
      { product.quantity ? <span>{ `${product.quantity}x` }</span> : null }
    </div>
  );
};

export default Product;