import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { Switch } from "react-router";
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";
import BreadcrumbsBar from "./common/BreadcrumbsBar";
import { Redirect, Route } from "react-router-dom";
import DownloadPage from "../containers/DownloadPageContainer";
import FileExplorerContainer from "../containers/FileExplorerContainer";
import Error404 from "./statuses/Error404";
import Loading from "./statuses/Loading";
import Error500 from "./statuses/Error500";

const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderPopover = this.renderPopover.bind(this);
  }

  renderRoute() {
    const routes = (
      <Switch>
        <Route exact path="/" component={FileExplorerContainer} />
        <Route path="/get/:path" component={DownloadPage} />
        <Route path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    );

    switch (this.props.ipfs.connState) {
      case "offline":
        return <Loading message="Loading the app" />;
      case "connecting":
        return <Loading message="Connecting to IPFS Network" />;
      case "connected":
        return routes;
      case "failed":
        return <Error500 error="Failed to connect to IPFS." />;
      default:
        return <Error500 error="Unknown IPFS State." />;
    }
  }

  renderPopover() {
    const stats = this.props.ipfs.stats;
    return (
      <div>
        <p>Node status: {this.props.ipfs.connState}</p>
        <p>Statistics: {stats.state}</p>
        {stats.state === "loaded" && (
          <React.Fragment>
            <p>ID: {stats.data.identity.id}</p>
            <p>Agent Version: {stats.data.identity.agentVersion}</p>
            <p>Protocol Version: {stats.data.identity.protocolVersion}</p>
          </React.Fragment>
        )}
      </div>
    );
  }

  renderNetworkInfo() {
    const stats = this.props.ipfs.stats;
    return (
      <React.Fragment>
        {stats.state === "loaded" && (
          <React.Fragment>
            <strong>Peers</strong>: {stats.data.peers.length || "0"}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.createIpfsInstance();
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader
          popover={this.renderPopover()}
          networkInfo={this.renderNetworkInfo()}
        />
        <Content style={{ padding: "0 24px" }}>
          <BreadcrumbsBar />
          <Layout
            style={{ padding: "24px 0", background: "#fff", height: "100%" }}
          >
            {this.renderRoute()}
          </Layout>
        </Content>
        <AppFooter />
      </Layout>
    );
  }

  static propTypes = {
    ipfs: PropTypes.shape({
      connState: PropTypes.string,
      stats: PropTypes.object
    }),
    createIpfsInstance: PropTypes.func.isRequired
  };
}

export default App;
