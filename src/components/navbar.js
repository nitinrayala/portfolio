import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <NavLink to="/" className="brand" end>
          NR
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </NavLink>
          </li>
        </ul>

        <a className="nav-cta" href="mailto:nitinrayala@gmail.com">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;