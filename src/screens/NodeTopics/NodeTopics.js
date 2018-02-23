import React, { Component } from "react";
import NormalTopicsList from "../../components/NormalTopicsList/NormalTopicsList";

class NodeTopics extends Component {
  render() {
    return <NormalTopicsList loadData={true} tabName={this.props.keyName} />;
  }
}

export default NodeTopics;
