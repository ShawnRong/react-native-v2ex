import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import moment from "moment";
import "moment/locale/zh-cn";

const singleReply = props => {
  const avatarUrl = "https:" + props.replyData.item.member.avatar_normal;
  return (
    <View style={styles.replyContainer}>
      <View style={{ width: "10%" }}>
        <Image source={{ uri: avatarUrl }} style={styles.replyAvatar} />
      </View>
      <View style={{ width: "90%" }}>
        <Text style={styles.replyTime}>
          {moment
            .unix(props.replyData.item.created)
            .startOf("hour")
            .fromNow()}
        </Text>
        <Text style={styles.replyContent}>{props.replyData.item.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  replyContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    padding: 5,
    width: "100%"
  },
  replyAvatar: {
    width: 25,
    height: 25
  },
  replyTime: {
    fontSize: 12,
    color: "#ccc"
  },
  replyContent: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default singleReply;
