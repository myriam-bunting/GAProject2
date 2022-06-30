import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  let activeStyle = "underline";
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img>
            </div>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/64/64673.png"></img>
            </div>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3121/3121571.png"></img>
            </div>
            <NavLink to="/results">Results</NavLink>
          </li>
          <li>
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3068/3068327.png"></img>
            </div>
            <NavLink to="/links">More Info</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
