import React from "react";
import { Breadcrumb } from "antd";

/**
 * App Breadcrumbs bar.
 */
export default class BreadcrumbsBar extends React.Component {
  render() {
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>My Files</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
