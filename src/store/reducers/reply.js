import * as actions from "../actions/actionTypes";

const initialState = {
  replyList: [],
  replyInfo: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REPLY_LIST_START:
      return {
        ...state,
        replyList: [],
        replyInfo: null,
        loading: true
      };
    case actions.FETCH_REPLY_LIST_SUCCESS:
      return {
        ...state,
        replyList: action.replyList,
        loading: false
      };
    case actions.FETCH_REPLY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actions.FETCH_TOPIC_INFO_START:
      return {
        ...state,
        replyList: [],
        replyInfo: null,
        loading: true
      };
    case actions.FETCH_TOPIC_INFO_SUCCESS:
      return {
        ...state,
        replyInfo: { ...action.topicInfo },
        loading: false
      };
    case actions.FETCH_TOPIC_INFO_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
