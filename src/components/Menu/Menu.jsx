import React from "react";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="menu-link"
      >
        Reviews
      </a>
      <a
        href="#"
        className="menu-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        About Me
      </a>
      <a href="#examples" className="menu-link">
        Test Drive
      </a>
    </div>
  );
};

export default Menu;
