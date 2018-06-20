import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "../components/App";
import { createIpfsInstance, getIpfsNodeStats } from "../redux/ipfs.redux";

function mapStateToProps(state) {
  return { ipfs: state.ipfs };
}

function mapDispatchToProps(dispatch) {
  return {
    createIpfsInstance: () => {
      dispatch(createIpfsInstance());
    },
    getIpfsNodeStats: () => {
      dispatch(getIpfsNodeStats());
    }
  };
}

const AppContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
export default AppContainer;
