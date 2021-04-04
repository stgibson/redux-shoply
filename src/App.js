import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Shoply!</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
