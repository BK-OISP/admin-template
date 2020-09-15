import React from "react";

const NotiMenu = (props) => {
  const { id, index, icon, active, tabIndex, toggleRightMenu } = props;
  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link"
        id={id}
        onClick={() => {
          toggleRightMenu(index);
        }}
        onBlur={() => toggleRightMenu(index)}
      >
        <span tabIndex={tabIndex} className="material-icons">
          {icon}
        </span>
        <div className="navbar-badge">15</div>
      </div>

      <ul
        className={`dropdown-menu notification-menu ${
          active ? "dropdown-expand" : ""
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                <span>15/07/2020</span>
              </span>
            </a>
          </li>
        </div>

        <div className="dropdown-menu--footer">View All Notifications</div>
      </ul>
    </li>
  );
};

export default NotiMenu;
