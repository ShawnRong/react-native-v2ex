import { createStore, combineReducers, compose } from "redux";

import mainReducer from "./reducers/main";

const rootReducer = combineReducers({
  main: mainReducer
});

let composeEnhanders = compose;

if (__DEV__) {
  composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhanders());
};

export default configureStore;
