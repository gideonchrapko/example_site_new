import React, { useState } from 'react';
import { useSpring } from "react-spring";
import MenuRight from './Menu';

const Gallery = () => {
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
            Gallery
        </div>
    )
}

export default Gallery