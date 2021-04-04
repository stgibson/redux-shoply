import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { v4 as uuid } from "uuid";
import Product from "./Product";
import "./ProductList.css";

/**
 * Component for displaying list of products
 * @returns JSX code for rendering product list
 */
const ProductList = () => {
  const { products, cart } = useSelector(store => store, shallowEqual);

  /**
   * Determines total cost of items in cart
   * @returns total cost
   */
  const getCost = () => {
    const cost =  Object.keys(cart).reduce((cost, nextProductId) => (
      cost + (cart[nextProductId].quantity * cart[nextProductId].price)
    ), 0);
    return cost.toFixed(2);
  };

  return (
    <div className="ProductList">
      <h2>Product Listing</h2>
      <p>Total cost: ${ getCost() }</p>
      <ul>
        {
          Object.keys(products).map(productId => (
            <li key={ uuid() }>
              <Product id={ productId } product={ products[productId] } />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ProductList;