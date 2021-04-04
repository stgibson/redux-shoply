import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import './App.css';

/**
 * Main component for displaying navigation bar and setting up routes
 * @returns JSX code for rendering navigation bar and setting up routes
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
