import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import Loading from "../statuses/Loading";
import Error500 from "../statuses/Error500";
import FileExplorer from "../FileExplorer/FileExplorer";

const { Content } = Layout;

/**
 * Download page for single file / folder downloads.
 */
export default class DownloadPage extends React.Component {
  componentDidMount() {
    // load directory info by the URL
    const path = this.props.match.params.path;
    this.props.getPathInfo(path);
  }

  renderFiles(currFiles) {
    switch (currFiles.state) {
      case "loading":
        return <Loading message="Loading the requested path" />;
      case "loaded":
        return <FileExplorer />;
      case "failed":
        return <Error500 error="Unable to load data for requested path." />;
    }
  }

  render() {
    return (
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        {this.renderFiles(this.props.ipfs.currFiles)}
      </Content>
    );
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        path: PropTypes.string
      })
    }),
    getPathInfo: PropTypes.func.isRequired,
    ipfs: PropTypes.shape({
      currFiles: PropTypes.shape({
        state: PropTypes.string
      })
    })
  };
}
