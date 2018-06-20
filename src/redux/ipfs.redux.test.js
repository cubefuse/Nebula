import {
  createIpfsInstance,
  getIpfsNodeStats,
  getPathInfo
} from "./ipfs.redux";

describe("IPFS Redux tests", () => {
  it("should create an action to create IPFS instance", () => {
    const expectedAction = {
      type: "nebula/ipfs/CREATE_INSTANCE"
    };
    expect(createIpfsInstance()).toEqual(expectedAction);
  });

  it("should create an action to get path info", () => {
    const ipfsPath = "QmRWeczoWjVoZSY4cvTAp6YaGJSwYJSWvANHXaHiNVd8to";
    const expectedAction = {
      type: "nebula/ipfs/GET_PATH_INFO",
      path: ipfsPath
    };
    expect(getPathInfo(ipfsPath)).toEqual(expectedAction);
  });

  it("should create an action to get node stats", () => {
    const expectedAction = {
      type: "nebula/ipfs/GET_NODE_STATS"
    };
    expect(getIpfsNodeStats()).toEqual(expectedAction);
  });
});
