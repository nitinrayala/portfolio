import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
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
    </nav>
  );
}

export default Navbar;