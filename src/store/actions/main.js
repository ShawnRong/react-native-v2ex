import {
  FETCH_HOT_TOPIC_LIST_START,
  FETCH_HOT_TOPIC_LIST_SUCCESS,
  FETCH_HOT_TOPIC_LIST_FAIL
} from "./actionTypes";
import axios from "axios";

export const fetchHotTopicStart = () => {
  return {
    type: FETCH_HOT_TOPIC_LIST_START
  };
};

export const fetchHotTopicSuccess = hotList => {
  return {
    type: FETCH_HOT_TOPIC_LIST_SUCCESS,
    hotList: hotList
  };
};

export const fetchHotTopicFail = error => {
  return {
    type: FETCH_HOT_TOPIC_LIST_FAIL,
    error: error
  };
};

export const fetchHotTopic = () => {
  return dispatch => {
    dispatch(fetchHotTopicStart());
    axios
      .get("https://www.v2ex.com/api/topics/hot.json")
      .then(response => {
        dispatch(fetchHotTopicSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchHotTopicFail(error));
      });
  };
};
