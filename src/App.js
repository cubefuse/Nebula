import React from "react";
import { connect } from "react-redux";
import { createIpfsInstance } from "./redux/ipfs.redux";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import BreadcrumbsBar from "./components/common/BreadcrumbsBar";
import { HashRouter as Router, Route } from "react-router-dom";
import DownloadPageContainer from "./containers/DownloadPageContainer";
import FileExplorerContainer from "./containers/FileExplorerContainer";
import { Layout } from "antd";

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
            <Router>
              <div>
                <Route exact path="/" component={FileExplorerContainer} />
                <Route path="/get" component={DownloadPageContainer} />
              </div>
            </Router>
          </Layout>
        </Content>
        <AppFooter />
      </Layout>
    );
  }
}

export default connect()(App);
