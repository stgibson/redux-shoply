import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

test('renders without crashing', () => {

  render(<Provider store={ store }><App /></Provider>);
});
