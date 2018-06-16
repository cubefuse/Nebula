import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import Error404 from "./Error404";

test("can render", () => {
  const node = render(<Error404 />);
  expect(node).toMatchSnapshot();
});
