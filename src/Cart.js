import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { v4 as uuid } from "uuid";
import Product from "./Product";
import { addDiscount } from "./actions";
import { REMOVE10, REMOVE20, REMOVE30 } from "./discounts";
import "./Cart.css";

/**
 * Component for displaying user's cart
 * @returns JSX code for rendering cart
 */
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart, shallowEqual);
  const currDiscount = useSelector(store => store.discount);
  const [discount, setDiscount] = useState("");

  const handleChange = evt => {
    const { value } = evt.target;
    setDiscount(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!currDiscount) {
      dispatch(addDiscount(discount));
    }
  };

  /**
   * Determines total cost of items in cart
   * @returns total cost
   */
   const getCost = () => {
    let cost =  Object.keys(cart).reduce((cost, nextProductId) => (
      cost + (cart[nextProductId].quantity * cart[nextProductId].price)
    ), 0);
    if (currDiscount) {
      switch(currDiscount) {
        case REMOVE10:
          cost *= 0.9;
          break;
        case REMOVE20:
          cost *= 0.8;
          break;
        case REMOVE30:
          cost *= 0.7;
          break;
      }
    }
    return cost.toFixed(2);
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <p>Total cost: ${ getCost() }</p>
      <ul>
        {
          Object.keys(cart).map(productId => (
            <li key={ uuid() }>
              <Product id={ productId } product={ cart[productId ]} />
            </li>
          ))
        }
      </ul>
      {
        currDiscount ? null : (
          <form onSubmit={ handleSubmit }>
            <label htmlFor="discount">Discount:</label>
            <input
              id="discount"
              name="discount"
              type="text"
              onChange={ handleChange }
              value={ discount }
            />
            <button type="submit">Add Discount</button>
          </form>
        )
      }
    </div>
  );
};

export default Cart;