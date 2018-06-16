import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

/**
 * App Header component. Contains the top bar.
 */
export default class AppHeader extends React.Component {
  render() {
    return (
      <Header className="header">
        <div style={{ color: "white" }}>
          <span style={{ fontSize: "x-large", paddingRight: "5px" }}>
            <strong>Nebula</strong>
          </span>
          <span style={{ fontSize: "large", paddingRight: "10px" }}>
            Web UI
          </span>
          <span style={{ fontSize: "small" }}>POC-01</span>
        </div>
      </Header>
    );
  }
}
