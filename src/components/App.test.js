import React from "react";
import "jest-dom/extend-expect";
import App from "./App";
import TestHelpers from "../util/test-helpers";

const mockIpfsState = {
  connState: "connected",
  stats: {
    state: "loaded",
    data: {
      identity: {},
      peers: []
    }
  }
};

test("can render with mock data", () => {
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});

test("createIpfsInstance function gets called on componentDidMount", () => {
  const mockFn = jest.fn();

  TestHelpers.renderWithRouter(
    <App createIpfsInstance={mockFn} ipfs={mockIpfsState} />
  );
  expect(mockFn).toBeCalled();
});

test("Loading the app indicator gets shown", () => {
  const mockIpfsState = { connState: "offline", stats: {} };
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});

test("Connecting to network indicator gets shown", () => {
  const mockIpfsState = { connState: "connecting", stats: {} };
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});

test("Failed to connect error gets shown", () => {
  const mockIpfsState = { connState: "failed", stats: {} };
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});
