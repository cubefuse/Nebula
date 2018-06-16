import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import AppHeader from "./AppHeader";

test("can render", () => {
  const node = render(<AppHeader />);
  expect(node).toMatchSnapshot();
});
