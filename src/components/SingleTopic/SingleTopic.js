import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import "moment/locale/zh-cn";

const singleTopic = props => {
  let avatarImg = "https:" + props.topicAuthor.avatar_normal;
  return (
    <TouchableOpacity onPress={props.onTopicSelected}>
      <View style={styles.topicItem}>
        <View style={styles.topicAvatarArea}>
          <Image source={{ uri: avatarImg }} style={styles.topicAvatar} />
        </View>
        <View style={styles.topicInfoArea}>
          <Text>{props.topicTitle}</Text>
          <View style={styles.topicDetailArea}>
            <View style={styles.topicDetailTag}>
              <Text style={styles.topicDetailText}>
                {props.topicNode.title}
              </Text>
            </View>
            <View style={styles.topicDetailUser}>
              <Text style={[{ fontWeight: "bold" }, styles.topicDetailText]}>
                {props.topicAuthor.username}
              </Text>
            </View>
            <View>
              <Text style={styles.topicDetailText}>
                {moment
                  .unix(props.topicLastModify)
                  .startOf("hour")
                  .fromNow()}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.topicReplyCountArea}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {props.topicReplies}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  topicItem: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    justifyContent: "space-between",
    alignItems: "center"
  },
  topicAvatar: {
    height: 30,
    width: 30
  },
  topicAvatarArea: {
    width: "12%"
  },
  topicInfoArea: {
    width: "80%"
  },
  topicReplyCountArea: {
    width: "8%",
    backgroundColor: "#aab0c6",
    borderRadius: 10,
    alignItems: "center"
  },
  topicDetailArea: {
    flexDirection: "row",
    width: "100%",
    marginTop: 5,
    alignItems: "center"
  },
  topicDetailTag: {
    marginRight: 10,
    backgroundColor: "#f5f5f5"
  },
  topicDetailUser: {
    marginRight: 10
  },
  topicDetailText: {
    fontSize: 12,
    color: "#999"
  }
});

export default singleTopic;
