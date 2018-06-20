import React from "react";
import { Layout } from "antd";
import FileTree from "./FileTree";

const { Sider, Content } = Layout;

export default class FileExplorer extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect.bind(this);
  }

  onSelect(selectedKeys, info) {
    console.log("selected", selectedKeys, info);
  }

  render() {
    return (
      <Content>
        <Sider width={200} style={{ background: "#fff" }}>
          <FileTree fileList={[]} onSelect={this.onSelect} />
        </Sider>
        <Content style={{ padding: "0 24px" }}>Content</Content>
      </Content>
    );
  }
}
