import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import FileExplorerContainer from "./FileExplorerContainer";

test("can render", () => {
  const node = render(<FileExplorerContainer />);
  expect(node).toMatchSnapshot();
});
