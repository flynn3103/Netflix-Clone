import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./components/routes";

import store from "./store";

const app = (
  <Provider store={store.configure()}>
    <Routes />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
