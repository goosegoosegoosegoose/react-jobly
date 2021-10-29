import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/userContext";
import { Container, Navbar, Nav } from "react-bootstrap"

const NavbarComp = ({logout, loggedIn}) => {
  const currentUser = useContext(UserContext);

  if (!loggedIn) {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand className="mx-4">
          <NavLink exact to="/">
            Jobly
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink exact to="/login">
              Login
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink exact to="/signup">
              Sign Up
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  };

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand className="mx-4">
        <NavLink exact to="/">
          Jobly
        </NavLink>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>
          <NavLink exact to="/companies">
            Companies
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink exact to="/jobs">
            Jobs
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink exact to="/" onClick={logout}>
            Log out {currentUser ? currentUser.username : null }
          </NavLink>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarComp;