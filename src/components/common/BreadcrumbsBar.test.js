import React from "react";
import "jest-dom/extend-expect";
import BreadcrumbsBar from "./BreadcrumbsBar";
import TestHelpers from "../../util/test-helpers";

test("can render with Router", () => {
  const node = TestHelpers.renderWithRouter(<BreadcrumbsBar />);
  expect(node).toMatchSnapshot();
});
