import IPFS from "ipfs";
import Logger from "../util/logger";

/**
 * Used to interact with the JS-IPFS API
 */
export default class IpfsHandler {
  constructor() {
    this.node = null;
    this.createNode = this.createNode.bind(this);
    this.listDirectory = this.listDirectory.bind(this);
    this.getStats = this.getStats.bind(this);
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

  /**
   * Lists files in an IPFS directory.
   * @param path string - IPFS path string
   * @returns {Promise<Object[]>} - A promise that resolves to an array of file info objects. Would reject on failure.
   */
  listDirectory(path) {
    Logger.debug(`Getting directory info for ${path}`, "api/ipfs");
    return new Promise((resolve, reject) => {
      this.node.ls(path, (err, data) => {
        if (err) {
          Logger.debug(`Unable to get directory info for ${path}`, "api/ipfs");
          reject();
        } else {
          Logger.debug(`Received directory info for ${path}`, "api/ipfs");
          resolve(data);
        }
      });
    });
  }

  /**
   * Get statistics about the IPFS node.
   */
  getStats() {
    const node = this.node;
    async function loadStats() {
      Logger.debug(`Getting IPFS node statistics`, "api/ipfs");
      const id = node.id();
      const peers = node.swarm.peers();

      return {
        identity: await id,
        peers: await peers
      };
    }
    return loadStats();
  }
}
