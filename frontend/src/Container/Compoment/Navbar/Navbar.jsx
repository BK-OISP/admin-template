import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link">
              <span className="material-icons">menu</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <span className="material-icons">menu</span>
            </div>
          </li>
        </ul>
        <form className="navbar-search">
          <input
            type="text"
            name="nav-search"
            id="nav-search"
            placeholder="Search something ..."
          />
          <span className="material-icons">search</span>
        </form>
        <ul className="navbar-nav nav-right">
          <li className="nav-item">
            <div className="nav-link">
              <span className="material-icons">menu</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <span className="material-icons">menu</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
