import { createIpfsInstance } from "./ipfs.redux";

describe("IPFS Redux tests", () => {
  it("should create an action to create IPFS instance", () => {
    const expectedAction = {
      type: "nebula/ipfs/CREATE_INSTANCE"
    };
    expect(createIpfsInstance()).toEqual(expectedAction);
  });

  it("should create an action to create IPFS instance", () => {
    const expectedAction = {
      type: "nebula/ipfs/CREATE_INSTANCE"
    };
    expect(createIpfsInstance()).toEqual(expectedAction);
  });

  it("should create an action to create IPFS instance", () => {
    const expectedAction = {
      type: "nebula/ipfs/CREATE_INSTANCE"
    };
    expect(createIpfsInstance()).toEqual(expectedAction);
  });
});
