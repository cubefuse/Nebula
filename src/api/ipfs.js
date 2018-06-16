import IPFS from "ipfs";
import Logger from "../util/logger";

/**
 * Used to interact with the JS-IPFS API
 */
export default class IpfsHandler {
  constructor() {
    this.node = null;
    this.createNode = this.createNode.bind(this);
  }

  /**
   * Starts a new IPFS node.
   * @returns {Promise<any>} A promise that resolves to a new IPFS node. Would reject on failure.
   */
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
