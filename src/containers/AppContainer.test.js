import React from "react";
import "jest-dom/extend-expect";
import TestHelpers from "../util/test-helpers";
import AppContainer from "./AppContainer";

test("can render with initial state", () => {
  const node = TestHelpers.renderWithRouterAndRedux(<AppContainer />);
  expect(node).toMatchSnapshot();
});
