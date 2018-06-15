import React from "react";
import { connect } from "react-redux";
import { createIpfsInstance } from "./redux/ipfs.redux";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(createIpfsInstance());
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <div style={{ color: "white" }}>
            <span style={{ fontSize: "x-large", paddingRight: "5px" }}>
              Nebula
            </span>
            <span style={{ fontSize: "large", paddingRight: "10px" }}>
              by Cubefuse
            </span>
            <span style={{ fontSize: "small" }}>POC-01</span>
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>My Files</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <Menu.Item key="1">My Files</Menu.Item>
                <Menu.Item key="5">Trash</Menu.Item>
                <Menu.Item key="6">Shared</Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © 2018 Cubefuse. Distributed under MIT open-source license.
        </Footer>
      </Layout>
    );
  }
}

export default connect()(App);
