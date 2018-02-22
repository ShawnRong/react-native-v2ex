import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import { connect } from "react-redux";

import { NavigationActions } from "../../utility/navigationActions";
import TopicsList from "../../components/TopicsList/TopicsList";
import { fetchHotTopic } from "../../store/actions";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

class Main extends Component {
  state = {
    index: 0,
    routes: [{ key: "hot", title: "最热" }, { key: "all", title: "全部" }]
  };

  // tabHeaderList = [
  //   {
  //     key: "hot",
  //     id: "hot",
  //     title: "最热"
  //   },
  //   {
  //     key: "all",
  //     id: "all",
  //     title: "全部"
  //   },
  //   {
  //     key: "apple",
  //     id: 184,
  //     title: "Apple"
  //   }
  // ];

  constructor(props) {
    super(props);
    NavigationActions.setNavigator(props.navigator);
  }

  componentDidMount() {
    this.props.onLoadHotTopicList();
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      style={styles.tabBarStyle}
      tabStyle={styles.tabBarItemStyle}
      labelStyle={styles.tabBarLabelStyle}
      indicatorStyle={styles.tabBarItemActiveStyle}
      {...props}
    />
  );

  // topicSelectedHandler = replyInfo => {
  //   this.props.navigator.push({
  //     screen: "v2ex-react-native.ReplyScreen",
  //     title: "主题",
  //     passProps: {
  //       replyInfo: replyInfo
  //     }
  //   });
  // };

  FirstRoute = () => (
    // <TopicsList onPressTopicItem={this.topicSelectedHandler} />
    <TopicsList />
  );

  SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: "#673ab7" }]} />
  );

  _renderScene = SceneMap({
    hot: this.FirstRoute,
    all: this.SecondRoute
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBarStyle: {
    height: 30,
    backgroundColor: "#fff"
  },
  tabBarItemStyle: {
    padding: 0
  },
  tabBarItemActiveStyle: {
    backgroundColor: "#445"
  },
  tabBarLabelStyle: {
    color: "#000"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onLoadHotTopicList: () => dispatch(fetchHotTopic())
  };
};

export default connect(null, mapDispatchToProps)(Main);
