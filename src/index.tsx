import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import registerServiceWorker from "./misc/registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { login } from "./redux/reducers";

const persistedState = localStorage.getItem("ReduxStorage")
  ? JSON.parse(localStorage.getItem("ReduxStorage")!)
  : {};

const store = createStore(
  combineReducers({ login }),
  persistedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("ReduxStorage", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
