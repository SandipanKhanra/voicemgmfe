/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ResponsiveAppBar = ({ pages, defaultValue }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  // console.log(defaultValue);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <Nav className="navbar navbar-expand-md navbar-light bg-light  ">
      <NavLink className="navbar-brand px-2" to="/dashboard">
        VOICE MGM
      </NavLink>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {pages.map((page) => {
            return (
              <li
                className={`${
                  defaultValue === page ? "nav-item  active" : "nav-item "
                }`}
                key={page}
              >
                <NavLink className="nav-link" to={page.toLowerCase()}>
                  {page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Nav>
  );
};

export default ResponsiveAppBar;
