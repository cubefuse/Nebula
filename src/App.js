import React from "react";
import { connect } from "react-redux";
import { createIpfsInstance } from "./redux/ipfs.redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(createIpfsInstance());
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Everything is working!</h1>
      </div>
    );
  }
}

export default connect()(App);
