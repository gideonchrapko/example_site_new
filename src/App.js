import React from "react";
import { Switch, Route } from "react-router-dom";
import Start from "./start";
import Page1 from "./page1/page1";
import Page2 from "./page2";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </div>
  );
}
