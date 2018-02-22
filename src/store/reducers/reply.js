import * as actions from "../actions/actionTypes";

const initialState = {
  replyList: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REPLY_LIST_START:
      return {
        ...state,
        replyList: [],
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
    default:
      return state;
  }
};

export default reducer;
