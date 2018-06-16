import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";

/**
 * App Breadcrumbs bar.
 */
class BreadcrumbsBar extends React.Component {
  constructor(props) {
    super(props);

    // A map of URLs with custom breadcrumb name mappings.
    this.breadcrumbNameMap = {
      "/get": "Download",
      "/404": "404 Not Found"
    };
  }

  render() {
    const pathSnippets = this.props.location.pathname.split("/").filter(i => i);

    const breadcrumbSubItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{this.breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });

    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
    ].concat(breadcrumbSubItems);

    return (
      <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>
    );
  }
}

export default withRouter(BreadcrumbsBar);
