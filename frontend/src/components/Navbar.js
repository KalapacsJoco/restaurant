import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Bejelentkezés</Link>
        </li>
        <li>
          <Link to="/register">Regisztráció</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;