import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`container nav_bar ${isActive ? 'active' : ''}`}>
        <div className="left nav_items">
          <Link to="/" className='nav_items1'>Sarthak Sharma</Link>
        </div>
        
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="right">
          <Link to="/Projects" className='nav_items p1'>projects</Link>
          <Link to="/About" className='nav_items a1'>about</Link>
          <Link to="/Contact" className='nav_items c1'>contact</Link>
          <Link to="https://www.linkedin.com/in/sarthak-sharma-778b28257/" className='nav_items linkedin' target='_blank'>linkedin</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
