import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./configureStore";

// Enable logging on development builds
if (process.env.NODE_ENV !== "production") {
  localStorage.setItem("debug", "nebula:*");
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV !== "production") {
  module.hot.accept();
}
