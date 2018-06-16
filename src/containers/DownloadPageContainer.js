// @flow
import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

type Props = {
  match: any
};

/**
 * Download page for single file / folder downloads.
 */
export default class DownloadPageContainer extends React.Component<Props> {
  render() {
    return (
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        Download Page Container
      </Content>
    );
  }
}
