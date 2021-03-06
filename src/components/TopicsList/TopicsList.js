import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import { NavigationActions } from "../../utility/navigationActions";
import RefreshListView from "../../utility/RefreshListView";
import SingleTopic from "../SingleTopic/SingleTopic";
import { fetchHotTopic } from "../../store/actions";

class TopicsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadHotTopicList();
  }

  onTopicSelected = data => {
    NavigationActions.push({
      screen: "v2ex-react-native.ReplyScreen",
      title: "主题",
      passProps: {
        replyInfo: data
      }
    });
  };

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <FlatList
        style={styles.topicsContainer}
        data={this.props.hotTopicList}
        keyExtractor={this._keyExtractor}
        renderItem={topic => {
          return (
            <SingleTopic
              topicTitle={topic.item.title}
              topicAuthor={topic.item.member}
              topicNode={topic.item.node}
              topicReplies={topic.item.replies}
              topicLastModify={topic.item.last_modified}
              // onTopicSelected={() => this.props.onPressTopicItem(topic.item)}
              onTopicSelected={() => this.onTopicSelected(topic.item)}
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
    hotTopicList: state.main.hotTopicList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadHotTopicList: () => dispatch(fetchHotTopic())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
