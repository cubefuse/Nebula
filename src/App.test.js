import React from "react";
import 'jest-dom/extend-expect'
import App from "./App";
import { renderWithRedux } from "./util/test-helpers";

test('can render with redux with defaults', () => {
  const node = renderWithRedux(<App />);
  expect(node).toMatchSnapshot();
});