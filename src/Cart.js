import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { v4 as uuid } from "uuid";
import Product from "./Product";
import "./Cart.css";

/**
 * Component for displaying user's cart
 * @returns JSX code for rendering cart
 */
const Cart = () => {
  const cart = useSelector(store => store.cart, shallowEqual);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ul>
        {
          Object.keys(cart).map(productId => (
            <li key={ uuid() }>
              <Product id={ productId } product={ cart[productId ]} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Cart;