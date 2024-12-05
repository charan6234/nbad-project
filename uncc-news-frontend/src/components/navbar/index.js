import React from "react";
import { FaRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar container fixed="top" color="success">
        <NavbarBrand href="/">
          <b className="text-light">C56 - UNCC News</b>
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
    </div>
  );
};

export default NavBar;
