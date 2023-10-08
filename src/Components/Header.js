import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/achievements" activeClassName="active">Achievements</NavLink>
          </li>
          <li>
            <NavLink to="/experience" activeClassName="active">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
