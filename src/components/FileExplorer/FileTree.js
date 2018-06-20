import React from "react";
import { Tree } from "antd";
import PropTypes from "prop-types";
const TreeNode = Tree.TreeNode;

export default class FileTree extends React.Component {
  render() {
    return (
      <Tree
        showLine={true}
        defaultExpandAll={true}
        onSelect={this.props.onSelect}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }

  static propTypes = {
    fileList: PropTypes.array,
    onSelect: PropTypes.func
  };
}
