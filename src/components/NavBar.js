import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink to="https://www.w3.org/WAI/standards-guidelines/wcag/glance/">
              Standards at a glance
            </NavLink>
          </li>
          <li>
            <NavLink to="https://blog.ai-media.tv/blog/6-awesome-accessibility-apps">
              Some great accessibility apps
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
