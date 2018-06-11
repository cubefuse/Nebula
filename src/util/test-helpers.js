import { createStore } from "redux";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import rootReducer from '../redux';

export function renderWithRedux(ui, {initialState, store = createStore(rootReducer, initialState)} = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}