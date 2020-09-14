import React, { useCallback, useEffect, useState } from "react";

import Logo from "../../../assets/img/oisp_favicon.ico";

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotiMenuOpen, setIsNotiMenuOpen] = useState(false);

  //close Dropdown when click outside or reclick

  console.log(isNotiMenuOpen);
  const toggleNotiMenu = useCallback(() => {
    setIsNotiMenuOpen((prev) => !prev);
  }, []);

  const toggleUserMenu = useCallback(() => {
    setIsUserMenuOpen((prev) => !prev);
  }, []);

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
            <div className="nav-link" id="noti-dropdown">
              <span
                onFocus={() => {
                  toggleNotiMenu();
                }}
                onBlur={() => toggleNotiMenu()}
                tabIndex="0"
                className="material-icons"
              >
                notifications
              </span>
              <div className="navbar-badge">15</div>
            </div>
            {isNotiMenuOpen && (
              <ul
                className={`dropdown-menu notification-menu ${
                  isNotiMenuOpen ? "dropdown-expand" : ""
                }`}
              >
                <div className="dropdown-menu--header">Notifications</div>

                <div className="dropdown-menu--content overlay-scrollbar">
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">bookmark_border</span>
                      </div>
                      <span className="dropdown-menu--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                        <br />
                        <span>15/07/2020</span>
                      </span>
                    </a>
                  </li>
                </div>

                <div className="dropdown-menu--footer">
                  View All Notifications
                </div>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <div className="avt dropdown" id="user-dropdown">
              <span
                className="material-icons "
                onFocus={() => {
                  toggleUserMenu();
                }}
                onBlur={() => toggleUserMenu()}
                tabIndex="1"
              >
                account_circle
              </span>
              {isUserMenuOpen && (
                <ul
                  className={`dropdown-menu ${
                    isUserMenuOpen ? "dropdown-expand" : ""
                  }`}
                >
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">person</span>
                      </div>
                      <span className="dropdown-menu--text">Profile</span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">settings</span>
                      </div>
                      <span className="dropdown-menu--text">Settings</span>
                    </a>
                  </li>
                  <li className="dropdown-menu--item">
                    <a href="/#" className="dropdown-menu--link">
                      <div>
                        <span className="material-icons">clear</span>
                      </div>
                      <span className="dropdown-menu--text">Logout</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
