import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createHashHistory";
import rootReducer from "./redux";
import { createIpfsInstanceWatcher } from "./redux/ipfs.redux";

export const history = createHistory();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(createIpfsInstanceWatcher);

  return store;
}
