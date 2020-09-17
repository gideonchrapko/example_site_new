import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import "./styles.css";

const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});

ReactDOM.render(
  <Router history={customHistory}>
    <Route
      component={({ history }) => {
        window.appHistory = history;
        return <App />;
      }}
    />
  </Router>,
  document.getElementById('root')
  );
