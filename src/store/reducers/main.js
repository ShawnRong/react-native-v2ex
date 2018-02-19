import * as actions from "../actions/actionTypes";

const initalState = {
  data: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.LOAD_HOT:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
