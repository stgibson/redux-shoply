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

  return (
    <div className="ProductList">
      <h2>Product Listing</h2>
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