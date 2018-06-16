import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import AppFooter from "./AppFooter";

test("can render", () => {
  const node = render(<AppFooter />);
  expect(node).toMatchSnapshot();
});
