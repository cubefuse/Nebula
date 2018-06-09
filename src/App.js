import React from "react";
import { connect } from "react-redux";
import { createIpfsInstance } from "./redux/ipfs.redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      version: null,
      protocol_version: null,
      added_file_hash: null,
      added_file_contents: null
    };
    console.log("Dispatching");
    props.dispatch(createIpfsInstance());
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Everything is working!</h1>
        <p>
          Your ID is <strong>{this.state.id}</strong>
        </p>
        <p>
          Your IPFS version is <strong>{this.state.version}</strong>
        </p>
        <p>
          Your IPFS protocol version is{" "}
          <strong>{this.state.protocol_version}</strong>
        </p>
        <hr />
        <div>
          Added a file! <br />
          {this.state.added_file_hash}
        </div>
        <br />
        <br />
        <p>
          Contents of this file: <br />
          {this.state.added_file_contents}
        </p>
      </div>
    );
  }
}

export default connect()(App);
