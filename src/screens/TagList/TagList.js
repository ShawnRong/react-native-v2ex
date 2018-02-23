import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  PixelRatio
} from "react-native";

import nodesData from "../../utility/NodesData";

class TagList extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  openNodeTopics(node) {
    this.props.navigator.push({
      screen: "v2ex-react-native.NodeTopicsScreen",
      title: node.title,
      passProps: {
        keyName: node.name
      }
    });
  }

  renderTr = trData => {
    return (
      <View key={trData.node_name} style={style.tr}>
        <View style={style.tr_header}>
          <Text style={style.tr_header_title}>{trData.node_name}</Text>
        </View>
        <View style={style.rows}>
          {trData.children.map((row, index) => {
            return this.renderRow(row);
          })}
        </View>
      </View>
    );
  };

  renderRow = rowData => {
    return (
      <TouchableOpacity
        key={rowData.title + rowData.name}
        style={style.row}
        onPress={() => {
          this.openNodeTopics(rowData);
        }}
      >
        <Text style={style.row_title}>{rowData.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          {nodesData.map((v, i) => {
            return this.renderTr(v);
          })}
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  tr: {
    flexWrap: "wrap",
    flexDirection: "column"
  },
  tr_header: {
    backgroundColor: "#e2e2e2",
    paddingLeft: 10,
    height: 35,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  tr_header_title: {
    fontSize: 14,
    color: "#000000"
  },
  rows: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  row: {
    height: 30,
    marginHorizontal: 5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  row_title: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center"
  }
});

export default TagList;
