import IPFS from "ipfs";
import Logger from "../util/logger";

export default class IpfsHandler {
  constructor() {
    this.node = null;
    this.createNode = this.createNode.bind(this);
  }

  createNode() {
    Logger.debug("Starting IPFS Node", "api/ipfs");
    return new Promise((resolve, reject) => {
      this.node = new IPFS({ repo: String(Math.random() + Date.now()) });
      this.node.on("ready", () => {
        Logger.debug("IPFS node is ready", "api/ipfs");
        resolve();
      });
      this.node.on("error", () => {
        Logger.error("Error starting IPFS node", "api/ipfs");
        reject();
      });
    });
  }
}
