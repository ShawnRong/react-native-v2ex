import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import { NavigationActions } from "../../utility/navigationActions";
import RefreshListView from "../../utility/RefreshListView";
import NormalSingleTopic from "../NormalSingleTopic/NormalSingleTopic";
import { fetchTopicList } from "../../store/actions";

class NormalTopicsList extends Component {
  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => item.id;

  // componentDidMount() {
  //   this.props.onLoadTopicList(this.props.nodeName, 1);
  //   // this.props.onLoadTopicList("apple", 1);
  // }

  render() {
    return (
      <FlatList
        style={styles.topicsContainer}
        data={this.props.topicList}
        keyExtractor={this._keyExtractor}
        renderItem={topic => {
          return (
            <NormalSingleTopic
              topicTitle={topic.item.title}
              avatar={topic.item.avatar}
              topicAuthor={topic.item.member}
              topicReplies={topic.item.replies}
              topicLastModify={topic.item.time}
            />
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  topicsContainer: {
    width: "100%"
  }
});

const mapStateToProps = state => {
  return {
    topicList: state.topic.topicList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopicList: (node, page) => dispatch(fetchTopicList(node, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalTopicsList);
