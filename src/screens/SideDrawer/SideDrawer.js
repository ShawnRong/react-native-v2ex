import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import startMainScreen from "../../screens/startMainScreen";
import startTagScreen from "../../screens/startTagScreen";

class SideDrawer extends Component {
  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      to: "closed",
      side: "left",
      animated: true
    });
  };
  toggleButtonHandler = key => {
    switch (key) {
      case "index":
        startMainScreen();
        this.toggleDrawer();
        break;
      case "tag":
        startTagScreen();
        this.toggleDrawer();
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity onPress={() => this.toggleButtonHandler("index")}>
          <View style={styles.drawerItem}>
            <Icon
              name={"md-list"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>首页</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.toggleButtonHandler("tag")}>
          <View style={styles.drawerItem}>
            <Icon
              name={"md-pricetags"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>节点列表</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text>登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    marginTop: 10
  },
  drawerItemIcon: {
    margin: 10
  }
});

export default SideDrawer;
