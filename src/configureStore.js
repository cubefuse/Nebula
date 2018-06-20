import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createHashHistory";
import rootReducer from "./redux";
import { ipfsWatchers } from "./redux/ipfs.redux";

export const history = createHistory();

/**
 * Configures the Redux store with middleware and devTools.
 * @returns {*} the Redux Store
 */
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // Start the Redux Saga watchers
  sagaMiddleware.run(ipfsWatchers);

  return store;
}
