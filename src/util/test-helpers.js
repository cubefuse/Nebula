import { createStore } from "redux";
import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import rootReducer from "../redux";

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
}
