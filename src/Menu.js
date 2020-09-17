import React from 'react';
import { animated } from 'react-spring';
import Baseball from './images/WCC_bb.png'
import './menu.css'

export const MenuRight = ({ style }) => ( 
    <animated.div style={style} className="menu menu--right">
      <nav> 
        <img src={Baseball} alt="west coast customs logo" style={{ padding: "20px", height: "50px" }} />
        <ul className="menu-list menu-list--right"> 
          <li className="menu-list-item menu-list-item--right"> 
            <a>Home</a> 
          </li> 
          <li className="menu-list-item menu-list-item--right"> 
            <a>About</a> 
          </li> 
          <li className="menu-list-item menu-list-item--right"> 
            <a>Work</a> 
          </li> 
          <li className="menu-list-item menu-list-item--right"> 
            <a>Contact</a> 
          </li> 
        </ul> 
      </nav> 
    </animated.div > 
  );