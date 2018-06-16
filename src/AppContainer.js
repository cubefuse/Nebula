// @flow
import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
  return { ipfs: state.ipfs };
};

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
