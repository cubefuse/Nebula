import React from "react";
import { Layout } from "antd";
import { Switch } from "react-router";
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";
import BreadcrumbsBar from "./common/BreadcrumbsBar";
import { Redirect, Route } from "react-router-dom";
import DownloadPageContainer from "../containers/DownloadPageContainer";
import FileExplorerContainer from "../containers/FileExplorerContainer";
import Error404 from "./statuses/Error404";
import Loading from "./statuses/Loading";
import Error500 from "./statuses/Error500";

const { Content } = Layout;

class App extends React.Component {
  renderRoute() {
    const routes = (
      <Switch>
        <Route exact path="/" component={FileExplorerContainer} />
        <Route path="/get/:hash" component={DownloadPageContainer} />
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

  componentDidMount() {
    this.props.createIpfsInstance();
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
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
}

export default App;
