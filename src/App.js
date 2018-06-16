import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Switch } from "react-router";
import { createIpfsInstance } from "./redux/ipfs.redux";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import BreadcrumbsBar from "./components/common/BreadcrumbsBar";
import { Redirect, Route, withRouter } from "react-router-dom";
import DownloadPageContainer from "./containers/DownloadPageContainer";
import FileExplorerContainer from "./containers/FileExplorerContainer";
import Error404 from "./components/errors/Error404";

const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(createIpfsInstance());
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <Content style={{ padding: "0 50px" }}>
          <BreadcrumbsBar />
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Switch>
              <Route exact path="/" component={FileExplorerContainer} />
              <Route path="/get" component={DownloadPageContainer} />
              <Route path="/404" component={Error404} />
              <Redirect to="/404" />
            </Switch>
          </Layout>
        </Content>
        <AppFooter />
      </Layout>
    );
  }
}

export default withRouter(connect()(App));
