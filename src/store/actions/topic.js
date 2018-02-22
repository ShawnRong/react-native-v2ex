import {
  FETCH_TOPIC_LIST,
  FETCH_TOPIC_LIST_START,
  FETCH_TOPIC_LIST_SUCCESS,
  FETCH_TOPIC_LIST_FAIL
} from "./actionTypes";
import { nodeTopics } from "../../utility/Api";

export const fetchTopicStart = () => {
  return {
    type: FETCH_TOPIC_LIST_START
  };
};

export const fetchTopicSuccess = topicList => {
  return {
    type: FETCH_TOPIC_LIST_SUCCESS,
    topicList: topicList
  };
};

export const fetchTopicFail = error => {
  return {
    type: FETCH_TOPIC_LIST_FAIL,
    error: error
  };
};

export const fetchTopicList = (node, page) => {
  return dispatch => {
    dispatch(fetchTopicStart());
    nodeTopics(node, page)
      .then(data => {
        dispatch(fetchTopicSuccess(data));
      })
      .catch(error => dispatch(fetchTopicFail(error)));
  };
};
