import rootReducer from "./rootReducer";
import { addToCart, deleteFromCart } from "../actions";

describe("rootReducer(state, action) tests", () => {
  const testCart = {
    1: {
      name: "Test Item 1",
      quantity: 2
    },
    2: {
      name: "Test Item 2",
      quantity: 1
    }
  };

  it("returns state when no action type", () => {
    const state = { products: {}, cart: {} };
    expect(rootReducer(state, {})).toEqual(state);
  });

  it(
    `
      adds product to cart if action type is ADD_TO_CART & product isn't in
      cart
    `,
    () => {
      const state = { products: {}, cart: testCart };
      expect(rootReducer(state, addToCart("3", { name: "Test Item 3" })))
        .toEqual({
          products: {},
          cart: { ...testCart, 3: { name: "Test Item 3", quantity: 1 } }
        });
    }
  );

  it(
    `
      increments quantity of product in cart if action type is ADD_TO_CART &
      product is in cart
    `,
    () => {
      const state = { products: {}, cart: testCart };
      expect(rootReducer(state, addToCart("1", { })))
        .toEqual({
          products: {},
          cart: { ...testCart, 1: { name: "Test Item 1", quantity: 3 } }
        });
    }
  );

  it(
    `
      removes product from cart if action type is DELETE_FROM_CART & product is
      in cart with quantity 1
    `,
    () => {
      const state = { products: {}, cart: testCart };
      expect(rootReducer(state, deleteFromCart("2")))
        .toEqual({
          products: {},
          cart: { 1: { name: "Test Item 1", quantity: 2 } }
        });
    }
  );

  it(
    `
      decrements quantity of product in cart if action type is DELETE_FROM_CART
      & product is in cart with quantity greater than 1
    `,
    () => {
      const state = { products: {}, cart: testCart };
      expect(rootReducer(state, deleteFromCart("1")))
        .toEqual({
          products: {},
          cart: { ...testCart, 1: { name: "Test Item 1", quantity: 1 } }
        });
    }
  );

  it("returns state if attempts to remove product not in cart", () => {
    const state = { products: {}, cart: testCart };
    expect(rootReducer(state, deleteFromCart("3"))).toEqual(state);
  });
});