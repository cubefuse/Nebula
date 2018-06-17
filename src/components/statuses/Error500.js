//
import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

/**
 * 404 page not found error page.
 */
export default class Error500 extends React.Component {
  render() {
    return (
      <Content style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "10em", color: "lightgray", marginBottom: 0 }}>
          500
        </h1>
        <h2 style={{ fontSize: "xx-large", color: "gray" }}>
          Ouch! This application has crashed.
        </h2>
        {this.props.error && <p>Debug: {this.props.error}</p>}
      </Content>
    );
  }
}
