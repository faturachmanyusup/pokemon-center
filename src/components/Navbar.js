import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {
  const search = useRef();
  const history = useHistory()

  function handleSearch(e) {
    e.preventDefault();
    const query = search.current.value.toLowerCase();
    history.push({pathname: `/detail/${query}`});
    search.current.value = '';
  }

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
        <form onSubmit={(event) => handleSearch(event)} className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" ref={search} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;