//
import React from "react";
import PropTypes from "prop-types";
import { Layout, Spin } from "antd";

const { Content } = Layout;

/**
 * Loading indicator full-page component.
 */
export default class Loading extends React.Component {
  render() {
    return (
      <Content style={{ textAlign: "center" }}>
        <Spin size="large" />
        <h1 style={{ fontSize: "xx-large", color: "gray" }}>
          {this.props.message}
        </h1>
      </Content>
    );
  }

  static propTypes = {
    message: PropTypes.string
  };
}
