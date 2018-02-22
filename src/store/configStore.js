import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import mainReducer from "./reducers/main";
import replyReducer from "./reducers/reply";
import topicReducer from "./reducers/topic";

const rootReducer = combineReducers({
  main: mainReducer,
  reply: replyReducer,
  topic: topicReducer
});

let composeEnhanders = compose;

if (__DEV__) {
  composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhanders(applyMiddleware(thunk)));
};

export default configureStore;
