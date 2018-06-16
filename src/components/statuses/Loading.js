// @flow
import React from "react";
import { Layout, Spin } from "antd";

const { Content } = Layout;

type Props = {
  message?: string
};

/**
 * Loading indicator full-page component.
 */
export default class Loading extends React.Component<Props> {
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
}
