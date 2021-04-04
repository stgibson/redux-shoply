import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";

/**
 * Gets action for adding an item to cart in store
 * @param {string} id 
 * @param {Object{string|number}} product 
 * @returns action
 */
const addToCart = (id, product) => {
  return { type: ADD_TO_CART, id, product };
};

/**
 * Gets action for removing an item from cart in store
 * @param {string} id 
 * @returns action
 */
const deleteFromCart = (id) => {
  return { type: DELETE_FROM_CART, id };
}

export { addToCart, deleteFromCart };