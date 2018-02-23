import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import moment from "moment";
import "moment/locale/zh-cn";

import { connect } from "react-redux";

import { fetchReply } from "../../store/actions";
import SingleReply from "../../components/SingleReply/SingleReply";

class Reply extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadReplyList(this.props.replyInfo.id);
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    const topicOwnerAvatar =
      "https:" + this.props.replyInfo.member.avatar_normal;
    return (
      <ScrollView>
        <View style={styles.replyTitleArea}>
          <Text style={styles.replyTitle}>{this.props.replyInfo.title}</Text>
        </View>
        <View style={styles.replyDetailArea}>
          <Image
            source={{ uri: topicOwnerAvatar }}
            style={styles.replyDetailAvatar}
          />
          <View style={styles.replyDetailTag}>
            <Text>{this.props.replyInfo.node.title}</Text>
          </View>
          <View style={styles.replyDetailUser}>
            <Text style={{ fontWeight: "bold" }}>
              {this.props.replyInfo.member.username}
            </Text>
          </View>
          <View>
            <Text>
              {moment
                .unix(this.props.replyInfo.created)
                .startOf("hour")
                .fromNow()}
            </Text>
          </View>
        </View>
        <View style={styles.replyContentArea}>
          <Text>{this.props.replyInfo.content}</Text>
        </View>
        <View style={styles.replyOperateArea}>
          <TouchableOpacity style={styles.replyOperateButton}>
            <Text style={styles.replyOperateButtonText}>回复</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.replyOperateButton}>
            <Text style={styles.replyOperateButtonText}>感谢</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.props.replyList}
            renderItem={reply => {
              return <SingleReply replyData={reply} />;
            }}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  replyTitleArea: {
    padding: 10
  },
  replyTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  replyDetailArea: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2"
  },
  replyDetailAvatar: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  replyDetailTag: {
    marginRight: 10,
    backgroundColor: "#f5f5f5"
  },
  replyDetailUser: {
    marginRight: 10
  },
  replyContentArea: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2"
  },
  replyOperateArea: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2"
  },
  replyOperateButton: {
    backgroundColor: "#d4d4d4",
    width: "40%",
    margin: 10,
    height: 28,
    borderRadius: 4
  },
  replyOperateButtonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 20
  }
});

const mapStateToProps = state => {
  return {
    replyList: state.reply.replyList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadReplyList: topicId => dispatch(fetchReply(topicId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reply);
