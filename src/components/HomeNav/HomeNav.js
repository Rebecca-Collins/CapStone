import "./HomeNav.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="home-nav">
      <input type="checkbox" id="nav-control" className="nav-control" />
      <label htmlFor="nav-control" className="home-nav__toggle" onClick={toggleMenu}>
        <div className={`controller ${isOpen ? 'open' : ''}`}>
          <div className="line line--1"></div>
          <div className="line line--2"></div>
          <div className="line line--3"></div>
        </div>
      </label>

      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <h1><Link className="navigation-link" to="/homepage" onClick={toggleMenu}>Home</Link></h1>
        <h1><Link className="navigation-link" to="/schedule" onClick={toggleMenu}>Schedule</Link></h1>
        <h1><Link className="navigation-link" to="" onClick={toggleMenu}>Stats</Link></h1>
        <h1><Link className="navigation-link" to="/tryouts" onClick={toggleMenu}>Try out</Link></h1>
        <h1><Link className="navigation-link" to="" onClick={toggleMenu}>Donate</Link></h1>
        <h1><Link className="navigation-link" to="/sponsor" onClick={toggleMenu}>Sponsor</Link></h1>
        <h1><Link className="navigation-link" to="/admin" onClick={toggleMenu}>Admin</Link></h1>
      </nav>
    </div>
  );
}

export default HomeNav;
