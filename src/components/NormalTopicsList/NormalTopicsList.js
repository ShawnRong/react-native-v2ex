import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import { NavigationActions } from "../../utility/navigationActions";
import RefreshListView, { RefreshState } from "../../utility/RefreshListView";
import NormalSingleTopic from "../NormalSingleTopic/NormalSingleTopic";
import { fetchTopicList } from "../../store/actions";

class NormalTopicsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshState: RefreshState.Idle
    };
  }

  _keyExtractor = (item, index) => item.id;

  // componentDidMount() {
  //   if (this.props.focused) {
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.focused !== this.props.focused && this.props.focused) {
      this.onHeaderRefresh();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.focused) {
      // this.setState({ refreshState: RefreshState.HeaderRefreshing });
      if (!nextProps.topicLoading) {
        this.setState({ refreshState: RefreshState.Idle });
      }
    }
  }

  onHeaderRefresh = () => {
    this.props.onLoadTopicList(this.props.tabName);
    this.setState({ refreshState: RefreshState.HeaderRefreshing });
  };

  onTopicSelected = topicId => {
    NavigationActions.push({
      screen: "v2ex-react-native.NormalReplyScreen",
      title: "主题",
      passProps: {
        topicId: topicId
      }
    });
  };

  render() {
    return (
      <RefreshListView
        style={styles.topicsContainer}
        data={this.props.topicList}
        keyExtractor={this._keyExtractor}
        refreshState={this.state.refreshState}
        onHeaderRefresh={this.onHeaderRefresh}
        onFooterRefresh={this.onFooterRefresh}
        renderItem={topic => {
          return (
            <NormalSingleTopic
              topicTitle={topic.item.title}
              avatar={topic.item.avatar}
              topicAuthor={topic.item.member}
              topicReplies={topic.item.replies}
              topicLastModify={topic.item.time}
              onTopicSelected={() => this.onTopicSelected(topic.item.id)}
            />
          );
        }}
        // 可选
        footerRefreshingText="玩命加载中 >.<"
        footerFailureText="我擦嘞，居然失败了 =.=!"
        footerNoMoreDataText="-我是有底线的-"
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
    topicList: state.topic.topicList,
    topicLoading: state.topic.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopicList: tab => dispatch(fetchTopicList(tab))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalTopicsList);
