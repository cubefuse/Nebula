import React from "react";
import "jest-dom/extend-expect";
import App from "./App";
import TestHelpers from "../util/test-helpers";
import { createIpfsInstance } from "../redux/ipfs.redux";

const mockIpfsState = {
  connState: "connected"
};

test("can render with mock data", () => {
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});

test("createIpfsInstance function gets called on componentDidMount", () => {
  const mockFn = jest.fn();

  TestHelpers.renderWithRouter(<App createIpfsInstance={mockFn} ipfs={mockIpfsState} />);
  expect(mockFn).toBeCalled();
});

test("Loading the app indicator gets shown", () => {
  const mockIpfsState = { connState: "offline" };
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});

test("Connecting to network indicator gets shown", () => {
  const mockIpfsState = { connState: "connecting" };
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});

test("Failed to connect error gets shown", () => {
  const mockIpfsState = { connState: "failed" };
  const node = TestHelpers.renderWithRouter(
    <App createIpfsInstance={jest.fn()} ipfs={mockIpfsState} />
  );
  expect(node).toMatchSnapshot();
});
