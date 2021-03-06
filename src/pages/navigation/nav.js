import React from 'react';
import { Link } from 'react-router-dom';

const NavBAr = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/pages/home/home">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/pages/home/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/about/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/contact/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBAr;
