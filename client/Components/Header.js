import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default Header;
