import React from "react";
import { Layout } from "antd";
import NavigationPane from "../components/FileExplorerContainer/NavigationPane";

const { Content } = Layout;

/**
 * File explorer to browse the files of the logged-in user.
 */
export default class FileExplorerContainer extends React.Component {
  render() {
    return (
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <NavigationPane />
      </Content>
    );
  }
}
