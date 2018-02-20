import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";

import TopicsList from "../../components/TopicsList/TopicsList";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const FirstRoute = TopicsList;

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#673ab7" }]} />
);

class Main extends Component {
  state = {
    index: 0,
    routes: [{ key: "hot", title: "最热" }, { key: "all", title: "全部" }]
  };

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

  _renderScene = SceneMap({
    hot: FirstRoute,
    all: SecondRoute
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

export default Main;
