import React from "react";
import "./nav.css";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  return (
    <div className="nav">
      <h3 className="nav__heading">
        Food<span style={{ color: "green" }}>Mood</span>
      </h3>
      <nav className="nav__list">
        <ul className="nav__ul">
          <li>Home</li>
          <li>About</li>
          <li>Foods</li>
        </ul>
      </nav>
      <div className="nav__search">
        <SearchIcon style={{ cursor: "pointer" }} />
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
};

export default Nav;
