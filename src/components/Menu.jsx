import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <div>
    <nav>
      <ul className="menu">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
