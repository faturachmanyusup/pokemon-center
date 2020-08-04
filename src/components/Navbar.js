import React from 'react';

function Navbar(props) {
  function redirect(page) {
    props.redirect(page);
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="collapse navbar-collapse">
        <button
          type="button"
          className="navbar-brand btn"
          onClick={() => redirect('dashboard')}>
            POKEMON CENTER
        </button>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 btn">
          <li className="nav-item">
            <button
              className="nav-link btn"
              onClick={() => redirect('favorites')}
            >
              Favorites
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn">Detail</button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;