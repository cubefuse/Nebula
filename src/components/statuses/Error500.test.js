import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import Error500 from "./Error500";

test("can render", () => {
  const node = render(<Error500 />);
  expect(node).toMatchSnapshot();
});

test("can render with error message", () => {
  const node = render(<Error500 error="This is a test debug message." />);
  expect(node).toMatchSnapshot();
});