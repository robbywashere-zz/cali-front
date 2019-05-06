console.warn = () => {};
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { setConfig } from "react-hot-loader";
setConfig({ logLevel: "no-errors-please" });
//https://github.com/styled-components/styled-components/issues/1589

import withRoot from "./misc/withRoot";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { Login } from "./redux/Login";
import { Events } from "./redux/Events";

const persistedState = localStorage.getItem("ReduxStorage")
  ? JSON.parse(localStorage.getItem("ReduxStorage")!)
  : {};

const metaStore = { Login, Events };
export type RootState = typeof metaStore;
export const store = createStore(
  combineReducers(metaStore),
  persistedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("ReduxStorage", JSON.stringify(store.getState()));
});

const ProviderWithRoot = withRoot(Provider);

ReactDOM.render(
  <ProviderWithRoot store={store}>
    <Routes />
  </ProviderWithRoot>,
  document.getElementById("root")
);

//registerServiceWorker();
