import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "./actions";
import "./Product.css";

const Product = ({ id, product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => dispatch(addToCart(id, product));

  const handleDeleteFromCart = () => dispatch(deleteFromCart(id));

  return (
    <div className="Product">
      { `${product.name}: $${product.price}` }
      <button onClick={ handleAddToCart }>Add to cart!</button>
      <button onClick={ handleDeleteFromCart }>Remove from cart!</button>
    </div>
  );
};

export default Product;