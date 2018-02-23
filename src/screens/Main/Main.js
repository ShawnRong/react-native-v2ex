import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import { connect } from "react-redux";

import { NavigationActions } from "../../utility/navigationActions";
import TopicsList from "../../components/TopicsList/TopicsList";
import NormalTopicsList from "../../components/NormalTopicsList/NormalTopicsList";
import { fetchTopicList } from "../../store/actions";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

class Main extends Component {
  state = {
    index: 0,
    routes: [
      { key: "hot", title: "最热" },
      { key: "all", title: "全部" },
      { key: "tech", title: "技术" },
      { key: "creative", title: "创意" },
      { key: "play", title: "好玩" },
      { key: "apple", title: "apple" },
      { key: "jobs", title: "酷工作" },
      { key: "deals", title: "交易" },
      { key: "city", title: "城市" },
      { key: "qna", title: "问与答" }
    ]
  };

  constructor(props) {
    super(props);
    NavigationActions.setNavigator(props.navigator);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        NavigationActions.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  _renderHeader = props => (
    <TabBar
      style={styles.tabBarStyle}
      tabStyle={styles.tabBarItemStyle}
      labelStyle={styles.tabBarLabelStyle}
      indicatorStyle={styles.tabBarItemActiveStyle}
      scrollEnabled={true}
      useNativeDriver={true}
      {...props}
    />
  );

  _renderScene = ({ route, focused }) => {
    switch (route.key) {
      case "hot":
        return <TopicsList />;
      default:
        return <NormalTopicsList focused={focused} tabName={route.key} />;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        useNativeDriver
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
    padding: 0,
    width: Dimensions.get("window").width / 4
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
    onLoadTopicList: node => dispatch(fetchTopicList(node))
  };
};

export default connect(null, mapDispatchToProps)(Main);
