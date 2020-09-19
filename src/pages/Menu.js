import React from 'react';
import { animated } from 'react-spring';
import Baseball from '../images/WCC_bb.png'
import { Link } from 'react-router-dom'
import './menu.css'

  export default function MenuRight({ style }) {
  return (
    <animated.div style={style} className="menu menu--right">
      <nav> 
        <img 
          src={Baseball} 
          alt="west coast customs logo" 
          style={{ padding: "20px", height: "50px" }} 
          onClick={() => window.appHistory.push("/home")}
          />
            <li className="menu-list-item menu-list-item--right">
              <Link to="/shop">
              <a href="/" >Shop</a>
              </Link>
            </li>
            <li className="menu-list-item menu-list-item--right">
              <Link to="/gallery">
              <a href="/ ">Gallery</a>
              </Link>
            </li>
            <li className="menu-list-item menu-list-item--right">
              <Link to="/about">
              <a href="/" >About</a>
              </Link>
            </li>
            <li className="menu-list-item menu-list-item--right">
              <Link to="/about">
              <a href="/" >Contact</a>
              </Link>
            </li>
      </nav> 
    </animated.div > 
  );
}