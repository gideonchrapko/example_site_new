import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import RthreeF from "./components_3d/RthreeF";
import About from './pages/About';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Welcome from './pages/Welcome';
import { MenuRight } from './Menu';
import { useSpring, animated } from "react-spring"

export default function App() {
  const [rightMenuVisible, setRightMenuVisible] = useState(false);
  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
  });

  return (
    <div>
      <button
        className="menu-button"
        onClick={() => setRightMenuVisible(!rightMenuVisible)}
      >
        {rightMenuVisible ? "Close" : "Side Menu"}
      </button>
      <MenuRight style={rightMenuAnimation}/>
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

