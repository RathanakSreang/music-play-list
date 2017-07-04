import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

const configureStore = (preloadedState = {}) => {
  const reducer = (state=preloadedState, action) => {
    return state;
  }
  const middleware = applyMiddleware(logger)
  const store = createStore(reducer, 1,middleware);
  return store;
};

export default configureStore;