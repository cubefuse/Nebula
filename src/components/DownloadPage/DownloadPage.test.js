import React from "react";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import DownloadPage from "./DownloadPage";

test("can render properly with mock data", () => {
  const ipfsMockObj = { currFiles: { state: "loading" } };
  const matchMockObj = { params: { path: "12345" } };
  const node = render(
    <DownloadPage
      getPathInfo={jest.fn()}
      ipfs={ipfsMockObj}
      match={matchMockObj}
    />
  );
  expect(node).toMatchSnapshot();
});

test("calls getPathInfo on componentDidMount correctly", () => {
  const ipfsMockObj = { currFiles: { state: "loading" } };
  const matchMockObj = { params: { path: "12345" } };
  const mockFn = jest.fn();
  render(
    <DownloadPage
      getPathInfo={mockFn}
      ipfs={ipfsMockObj}
      match={matchMockObj}
    />
  );
  expect(mockFn).toHaveBeenCalledWith(matchMockObj.params.path);
});

test("can render properly with loaded state", () => {
  const ipfsMockObj = { currFiles: { state: "loaded" } };
  const matchMockObj = { params: { path: "12345" } };
  const node = render(
    <DownloadPage
      getPathInfo={jest.fn()}
      ipfs={ipfsMockObj}
      match={matchMockObj}
    />
  );
  expect(node).toMatchSnapshot();
});

test("can render properly with failed state", () => {
  const ipfsMockObj = { currFiles: { state: "failed" } };
  const matchMockObj = { params: { path: "12345" } };
  const node = render(
    <DownloadPage
      getPathInfo={jest.fn()}
      ipfs={ipfsMockObj}
      match={matchMockObj}
    />
  );
  expect(node).toMatchSnapshot();
});
