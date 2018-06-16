import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import BreadcrumbsBar from "./BreadcrumbsBar";

test("can render", () => {
  const node = render(<BreadcrumbsBar />);
  expect(node).toMatchSnapshot();
});
