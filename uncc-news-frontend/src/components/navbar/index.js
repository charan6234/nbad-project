import React from "react";
import { FaRightFromBracket } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from "reactstrap";

const NavBar = () => {
  const location = useLocation(); // Get the current route

  return (
    <div>
      <Navbar container fixed="top" color="success">
        <NavbarBrand href="/">
          <b className="text-light">C56 - UNCC Latest News</b>
        </NavbarBrand>
        <Nav className="me-auto">
          <NavItem active>
            <NavLink>
              <Link
                to="/"
                className={"text-light"}
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link
                to="/summary"
                className={"text-light"}
                style={{ textDecoration: "none" }}
              >
                Summary
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link
                to="/reports"
                className={"text-light"}
                style={{ textDecoration: "none" }}
              >
                Reports
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink
              className="text-light"
              href="/"
              onClick={() => {
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("image");
                window.localStorage.removeItem("tagLine");
                window.localStorage.removeItem("title");
                window.localStorage.removeItem("content");
              }}
            >
              <FaRightFromBracket /> <b>Logout</b>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      {/* Heading Section (Visible only on the Homepage) */}
      {location.pathname === "/" && (
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <h1 className="display-4 text-success">
            Welcome to C56 - UNCC Latest News
          </h1>
          <p className="lead text-secondary">
            Explore the latest news, research areas, grants and achievements at UNCC.
          </p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
