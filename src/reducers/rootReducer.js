import { products } from "../data.json";
import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes";

/**
 * Determines how to modify state based on action
 * @param {Object{Object{string|number}}} state 
 * @param {Object{string|Object{string|number}}} action 
 * @returns new version of state
 */
const rootReducer = (state={ products, cart: {} }, action) => {
  let currProduct;
  let newProduct;
  switch(action.type) {
    case ADD_TO_CART:
      currProduct = state.cart[action.id];
      if (currProduct) {
        newProduct = { ...currProduct, quantity: currProduct.quantity + 1 };
      }
      else {
        newProduct = { ...action.product, quantity: 1 };
      }
      return { ...state, cart: { ...state.cart, [action.id]: newProduct } };
    case DELETE_FROM_CART:
      currProduct = state.cart[action.id];
      if (!currProduct) {
        console.error("Tried to delete item not in cart");
        return state;
      }
      if (currProduct.quantity === 1) {
        const newCart = Object.keys(state.cart).reduce((newCart, nextProductId) => {
          if (nextProductId === action.id) {
            return newCart;
          }
          return { ...newCart, [nextProductId]: state.cart[nextProductId] };
        }, {});
        return { ...state, cart: newCart };
      }
      newProduct = { ...currProduct, quantity: currProduct.quantity - 1 };
      return { ...state, cart: { ...state.cart, [action.id]: newProduct } };
    default:
      return state;
  }
};

export default rootReducer;