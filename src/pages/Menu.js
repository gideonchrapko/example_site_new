import React from 'react';
// import { a } from 'react-spring';
import Baseball from '../images/WCC_bb.png';
import { Link } from 'react-router-dom';
import './menu.css';

  export default function MenuRight({ style }) {
  return (
    <div style={style} className="menu menu--right">
      <nav> 
        <img 
          src={Baseball} 
          alt="west coast customs logo" 
          style={{ padding: "20px", height: "50px" }} 
          onClick={() => window.appHistory.push("/home")}
        />
            <li className="menu-list-item menu-list-item--right">
              <Link to="/shop">
                Shop  
              </Link>
            </li>
            <li className="menu-list-item menu-list-item--right">
              <Link to="/gallery">
                Gallery 
              </Link>
            </li>
            <li className="menu-list-item menu-list-item--right">
              <Link to="/about">
                About 
              </Link>
            </li>
            <li className="menu-list-item menu-list-item--right">
              <Link to="/about">
                Contact 
              </Link>
            </li>
      </nav> 
    </div > 
  );
}