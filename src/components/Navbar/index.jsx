/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Navbar = (props) => {
  const { onClick, dataTheme, dataButtonTheme } = props;

  return (
    <nav className={`navbar navbar-expand-lg navbar-${dataTheme} bg-${dataTheme} shadow p-3 mb-5 bg-${dataTheme} rounded`}>
      <p className="navbar-brand">Web Agency</p>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">L'agence</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/works">Projets</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-text">
        <button className={`btn btn-outline-${dataButtonTheme} my-2 my-sm-0 bg-${dataTheme}`} onClick={onClick} type="button">Mode {dataTheme}</button>
      </div>
    </nav>
  );
};

export default Navbar;
