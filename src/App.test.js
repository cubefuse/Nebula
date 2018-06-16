import React from "react";
import 'jest-dom/extend-expect'
import App from "./App";
import TestHelpers from "./util/test-helpers";


test.skip('can render with redux with defaults', () => {
  const node = TestHelpers.renderWithRedux(<App />);
  expect(node).toMatchSnapshot();
});