import {
  FETCH_REPLY_LIST,
  FETCH_REPLY_LIST_START,
  FETCH_REPLY_LIST_SUCCESS,
  FETCH_REPLY_LIST_FAIL
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
