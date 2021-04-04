import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { v4 as uuid } from "uuid";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const products = useSelector(store => store.products, shallowEqual);

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