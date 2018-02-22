import * as actions from "../actions/actionTypes";

const initalState = {
  topicList: [],
  loading: false,
  error: null
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.FETCH_TOPIC_LIST_START:
      return {
        ...state,
        topicList: [],
        loading: true
      };
    case actions.FETCH_TOPIC_LIST_SUCCESS:
      return {
        ...state,
        topicList: action.topicList,
        loading: false
      };
    case actions.FETCH_HOT_TOPIC_LIST_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
