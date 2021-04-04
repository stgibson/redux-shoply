import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";
import { addToCart, deleteFromCart } from "./actions";

describe("addToCart(id, product) tests", () => {
  const id = "1";
  const product = { name: "shoes", price: 100.00 };

  it("returns object with key type and value ADD_TO_CART", () => {
    expect(addToCart(id, product).type).toEqual(ADD_TO_CART);
  });

  it("returns object with id", () => {
    expect(addToCart(id, product).id).toEqual(id);
  });

  it("returns object with product", () => {
    expect(addToCart(id, product).product).toEqual(product);
  });
});

describe("deleteFromCart(id) tests", () => {
  const id = "1";

  it("returns object with key type and value DELETE_FROM_CART", () => {
    expect(deleteFromCart(id).type).toEqual(DELETE_FROM_CART);
  });

  it("returns object with id", () => {
    expect(deleteFromCart(id).id).toEqual(id);
  });
});