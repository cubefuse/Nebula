import React from "react";
import PropTypes from "prop-types";
import { Icon, Layout, Popover } from "antd";

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
          <span style={{ fontSize: "small", paddingRight: "10px" }}>
            POC-01
          </span>
          <span style={{ fontSize: "small", paddingRight: "5px" }}>
            {this.props.networkInfo}
          </span>
          <Popover
            content={this.props.popover}
            title="Node Debug Info"
            trigger="hover"
            placement="bottom"
          >
            <div style={{ float: "right", fontSize: 16 }}>
              <Icon type="info-circle-o" />
            </div>
          </Popover>
        </div>
      </Header>
    );
  }

  static propTypes = {
    popover: PropTypes.node.isRequired,
    networkInfo: PropTypes.node.isRequired
  };
}
