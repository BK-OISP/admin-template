import React from "react";

const UserMenu = (props) => {
  const { id, index, icon, active, tabIndex, toggleRightMenu } = props;

  const USER_MENU = [
    {
      key: "profile",
      icon: "person",
      text: "Profile",
      link: "#",
    },
    { key: "settings", icon: "settings", text: "Settings", link: "#" },
    { key: "clear", icon: "clear", text: "Log out", link: "#" },
  ];
  return (
    <li className="nv--item dropdown">
      <div className="avt" id={id}>
        <span
          className="material-icons "
          tabIndex={tabIndex}
          onClick={() => {
            toggleRightMenu(index);
          }}
          onBlur={() => toggleRightMenu(index)}
        >
          {icon}
        </span>

        <ul className={`dropdown-menu ${active ? "dropdown-expand" : ""}`}>
          {USER_MENU.map((item) => {
            return (
              <li key={item.key} className="dropdown-menu--item">
                <a href={item.link} className="dropdown-menu--link">
                  <div>
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <span className="dropdown-menu--text">{item.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default UserMenu;
