import * as actions from "../actions/actionTypes";

const initalState = {
  hotTopicList: [],
  loading: false
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.FETCH_HOT_TOPIC_LIST_START:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_HOT_TOPIC_LIST_SUCCESS:
      return {
        ...state,
        hotTopicList: action.hotList,
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
