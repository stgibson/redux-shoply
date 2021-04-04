import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addToCart, deleteFromCart } from "./actions";
import "./ProductDetail.css";

const ProductDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(store => store.products, shallowEqual);
  const [currProduct, setCurrProduct] = useState(null);

  const handleAddToCart = () => dispatch(addToCart(id, currProduct));

  const handleDeleteFromCart = () => dispatch(deleteFromCart(id));

  useEffect(() => {
    const productId =
      Object.keys(products).find(productId => productId === id);
    if (productId) {
      setCurrProduct(products[productId]);
    }
    else {
      history.push("/");
    }
  }, [id, products]);

  return (
    <div className="ProductDetail">
      {
        currProduct ? (
          <>
            <h2>{ currProduct.name }</h2>
            <img src={ currProduct.image_url } alt="" />
            <p>{ currProduct.description }</p>
            <p>Price: ${ currProduct.price }</p>
            <button onClick={ handleAddToCart }>Add to cart!</button>
            <button onClick={ handleDeleteFromCart }>Remove from cart!</button>
          </>
        ) : <h2>Loading...</h2>
      }
    </div>
  )
};

export default ProductDetail;