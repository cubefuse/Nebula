import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import NavigationPane from "./NavigationPane";

test("can render", () => {
  const node = render(<NavigationPane />);
  expect(node).toMatchSnapshot();
});
