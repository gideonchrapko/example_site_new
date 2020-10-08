import React from "react";
import { Switch, Route } from "react-router-dom";

import RthreeF from "./pages/RthreeF";
import About from './pages/About';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Welcome from './pages/Welcome';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/Home" exact component={RthreeF} />
        <Route path="/" exact component={Welcome} />
        <Route path="/shop" component={Shop} />
        <Route path="/gallery" component={Gallery} />
      </Switch> 
      <div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
          <h6>© 2018 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
      </div>
    </div>
  );
}

