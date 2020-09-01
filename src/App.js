import React from "react";
import { Switch, Route } from "react-router-dom";
import Page1 from "./page1/page1";

import About from './About'
// import Page2 from "./page2";



export default function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/shop" component={Shop} /> */}
        <Route path="/about" component={About} />
        <Route path="/" exact component={Page1} />
      </Switch>
    </div>
  );
}

