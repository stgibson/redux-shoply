import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "./actions";
import "./Product.css";

const Product = ({ id, product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => dispatch(addToCart(id, product));

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