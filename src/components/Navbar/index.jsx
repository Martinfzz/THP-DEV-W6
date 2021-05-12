import React from 'react';

const Navbar = (props) => {
  const {onClick, dataTheme, dataButtonTheme} = props

  return (
    <nav className={`navbar navbar-expand-lg navbar-${dataTheme} bg-${dataTheme} shadow p-3 mb-5 bg-${dataTheme} rounded`}>
      <p className="navbar-brand">Portfolio de John Doe</p>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="https://github.com/Martinfzz" target="_blanck"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt ="logo Github" width="50px"/></a>
          </li>
        </ul>
      </div>
      <div className="navbar-text">
        <button className={`btn btn-outline-${dataButtonTheme} my-2 my-sm-0 bg-${dataTheme}`} onClick={onClick}>Mode {dataTheme}</button>
      </div>
    </nav>
  )
}

export default Navbar;