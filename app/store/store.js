import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "../reducers"

const configureStore = (preloadedState = {}) => {
  const middleware = applyMiddleware(promise(), thunk, logger)
  const store = createStore(reducer,middleware);
  return store;
};

export default configureStore;