import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import DownloadPageContainer from "./DownloadPageContainer";

test("can render", () => {
  const node = render(<DownloadPageContainer />);
  expect(node).toMatchSnapshot();
});
