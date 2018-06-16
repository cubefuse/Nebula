// @flow
import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

/**
 * File explorer left navigation pane.
 */
export default class NavigationPane extends React.Component<{}> {
  render() {
    return (
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
    );
  }
}
