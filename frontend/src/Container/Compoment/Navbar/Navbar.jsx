import React from "react";

import Logo from "../../../assets/img/oisp_favicon.ico";

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
            <img src={Logo} alt="OISP-Logo" className="logo" />
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
          <li className="nav-item dropdown">
            <div className="nav-link">
              <span class="material-icons">notifications</span>
              <div className="navbar-badge">15</div>
            </div>
            <ul className="dropdown-menu">
              <div className="dropdown-menu--header">Notifications</div>

              <div className="dropdown-menu--content">
                <li className="dropdown-menu--item">
                  <a href="/#" className="dropdown-menu--link">
                    <div>
                      <span class="material-icons">bookmark_border</span>
                    </div>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span>15/07/2020</span>
                  </a>
                </li>
              </div>

              <div className="dropdown-menu--footer">
                View All Notifications
              </div>
            </ul>
          </li>
          <li className="nav-item">
            <span class="material-icons avt">account_circle</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
