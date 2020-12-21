import React from "react";
import {NavLink} from "react-router-dom";
export const Navbar: React.FunctionComponent = () => (
  <nav className="blue darken-2">
    <div className="nav-wrapper container ">
      <a href="/" className="brand-logo">
        React + TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Todos List</NavLink>
        </li>
        <li>
          <NavLink to="/about">Info</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
