import React from "react";
import "./stylesheets/NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={props.onClick}>Home</li>
      </ul>
    </nav>
  );
};

export default NavBar;
