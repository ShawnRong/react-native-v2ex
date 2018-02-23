import {
  FETCH_REPLY_LIST,
  FETCH_REPLY_LIST_START,
  FETCH_REPLY_LIST_SUCCESS,
  FETCH_REPLY_LIST_FAIL,
  FETCH_TOPIC_INFO,
  FETCH_TOPIC_INFO_START,
  FETCH_TOPIC_INFO_SUCCESS,
  FETCH_TOPIC_INFO_FAIL
} from "./actionTypes";
import axios from "axios";

export const fetchReplyStart = () => {
  return {
    type: FETCH_REPLY_LIST_START
  };
};

export const fetchReplySuccess = replyList => {
  return {
    type: FETCH_REPLY_LIST_SUCCESS,
    replyList: replyList
  };
};

export const fetchReplyFail = error => {
  return {
    type: FETCH_REPLY_LIST_FAIL,
    error: error
  };
};

export const fetchReply = topicId => {
  return dispatch => {
    dispatch(fetchReplyStart());
    axios
      .get(`https://www.v2ex.com/api/replies/show.json?topic_id=${topicId}`)
      .then(response => {
        dispatch(fetchReplySuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchReplyFail(error));
      });
  };
};

export const fetchTopicInfoStart = () => {
  return {
    type: FETCH_TOPIC_INFO_START
  };
};

export const fetchTopicInfoSuccess = topicInfo => {
  return {
    type: FETCH_TOPIC_INFO_SUCCESS,
    topicInfo: topicInfo
  };
};

export const fetchTopicInfoFail = error => {
  return {
    type: FETCH_TOPIC_INFO_FAIL,
    error: error
  };
};

export const fetchTopicInfo = topicId => {
  return dispatch => {
    dispatch(fetchTopicInfoStart());
    axios
      .get(`https://www.v2ex.com/api/topics/show.json?id=${topicId}`)
      .then(response => {
        dispatch(fetchTopicInfoSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTopicInfoFail(error));
      });
  };
};
