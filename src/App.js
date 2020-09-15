import React from "react";
import { Switch, Route } from "react-router-dom";
import RthreeF from "./components_3d/RthreeF";
import About from './pages/About'
import Shop from './pages/Shop'
import Gallery from './pages/Gallery'
import Welcome from './pages/Welcome'

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
    </div>
  );
}

