import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/verify">Verify Invoice</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;