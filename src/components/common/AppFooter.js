// @flow
import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

/**
 * App Footer component.
 */
export default class AppFooter extends React.Component<{}> {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Copyright © 2018 Cubefuse. Distributed under MIT license.
      </Footer>
    );
  }
}
