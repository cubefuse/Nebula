import { createStore } from "redux";
import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import rootReducer from "../redux";
import { HashRouter as Router } from "react-router-dom";

/**
 * Helper functions for testing.
 */
export default class TestHelpers {
  /**
   * Render a component with Redux store.
   * @param ui - Component to render with the redux store
   * @param initialState - Store initial state to render with
   * @param store - A custom store to use when rendering
   * @returns component with Redux store
   */
  static renderWithRedux(
    ui,
    { initialState, store = createStore(rootReducer, initialState) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store
    };
  }

  /**
   * Render a component with React Router.
   * @param ui - Component to render with React Router
   * @returns component rendered with React router
   */
  static renderWithRouter(ui) {
    return render(<Router>{ui}</Router>);
  }

  static renderWithRouterAndRedux(
    ui,
    { initialState, store = createStore(rootReducer, initialState) } = {}
  ) {
    return this.renderWithRedux(<Router>{ui}</Router>, { initialState, store });
  }
}
