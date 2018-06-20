import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPathInfo } from "../redux/ipfs.redux";
import DownloadPage from "../components/DownloadPage/DownloadPage";

function mapStateToProps(state) {
  return { ipfs: state.ipfs };
}

function mapDispatchToProps(dispatch) {
  return {
    getPathInfo: path => {
      dispatch(getPathInfo(path));
    }
  };
}

const DownloadPageContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DownloadPage)
);
export default DownloadPageContainer;
