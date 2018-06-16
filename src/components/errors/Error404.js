import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

/**
 * 404 page not found error page.
 */
export default class Error404 extends React.Component {
  render() {
    return (
      <Content style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "10em", color: "lightgray", marginBottom: 0 }}>
          404
        </h1>
        <h2 style={{ fontSize: "xx-large", color: "gray" }}>
          The page you're looking for could not be found.
        </h2>
      </Content>
    );
  }
}
