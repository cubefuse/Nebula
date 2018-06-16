import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import configureStore from "./configureStore";

// We are using HashRouter as BrowserRouter does not work on IPFS.
import { HashRouter as Router } from "react-router-dom";

if (process.env.NODE_ENV !== "production") {
  // Enable logging on development builds
  localStorage.setItem("debug", "nebula:*");
}

// Configure Redux store
const store = configureStore();

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV !== "production") {
  // Hot reloading for development builds
  module.hot.accept();
}
