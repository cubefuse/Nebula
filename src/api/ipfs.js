import IPFS from "ipfs";

export default class IpfsHandler {
  constructor() {
    this.node = null;
    this.createNode = this.createNode.bind(this);
  }

  createNode() {
    console.log("Starting");
    return new Promise((resolve, reject) => {
      this.node = new IPFS({ repo: String(Math.random() + Date.now()) });
      this.node.on("ready", () => {
        console.log("IPFS node is ready");
        resolve();
      });
      this.node.on("error", e => {
        console.log("Error", e);
        reject();
      });
    });
  }
}
