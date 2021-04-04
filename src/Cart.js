import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { v4 as uuid } from "uuid";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector(store => store.cart, shallowEqual);

  const totalItems = () => {
    return Object.keys(cart)
      .reduce((sum, nextProductId) => sum + cart[nextProductId].quantity, 0);
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <p>Total number of items: { totalItems() }</p>
      <ul>
        {
          Object.keys(cart).map(productId => (
            <li key={ uuid() }>
              { `${cart[productId].name}: ${cart[productId].quantity}x` }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Cart;