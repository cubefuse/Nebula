import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import Loading from "./Loading";

test("can render", () => {
  const node = render(<Loading />);
  expect(node).toMatchSnapshot();
});

test("can render with loading message", () => {
  const node = render(<Loading message="This is a test loading message" />);
  expect(node).toMatchSnapshot();
});
