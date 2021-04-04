import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";

const addToCart = (id, product) => {
  return { type: ADD_TO_CART, id, product };
};

const deleteFromCart = (id) => {
  return { type: DELETE_FROM_CART, id };
}

export { addToCart, deleteFromCart };