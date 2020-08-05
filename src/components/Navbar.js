import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="collapse navbar-collapse">
        <Link
          type="button"
          className="navbar-brand btn"
          to="/">
            POKEMON CENTER
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 btn">
          <li className="nav-item">
            <Link
              className="nav-link btn"
              to="/favorites"
            >
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn">Detail</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;