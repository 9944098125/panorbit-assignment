import React from "react";

import UserMenu from "../UserMenu";
import "./styles.css";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navbarName = location.pathname.split("/")[1];
  return (
    <React.Fragment>
      <div className="navbar-container">
        {navbarName.toUpperCase()}
        <UserMenu />
      </div>
    </React.Fragment>
  );
}
