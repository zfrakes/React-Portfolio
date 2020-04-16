import React from 'react';

function Header (props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <h1 id="name">Zoey Frakes</h1>
          <div className="navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                  <a className="nav-item nav-link" href="/about">About</a>
                  <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                  <a className="nav-item nav-link" href="/contact">Contact</a>
              </div>
          </div>
      </div>
    </nav>
  );
}

export default Header;
