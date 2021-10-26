import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/userContext";

const Navbar = ({logout, loggedIn}) => {
  const currentUser = useContext(UserContext);
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser])

  if (!loggedIn) {
    return (
      <nav className="Navbar">
        <NavLink exact to="/">
          Jobly
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
      </nav>
    )
  };

  return (
    <nav className="Navbar">
      <NavLink exact to="/">
        Jobly
      </NavLink>
      <NavLink exact to="/companies">
        Companies
      </NavLink>
      <NavLink exact to="/jobs">
        Jobs
      </NavLink>
      <NavLink exact to="/profile">
        Profile
      </NavLink>
      <NavLink exact to="/" onClick={logout}>
        Log out {currentUser ? currentUser.username : null }
      </NavLink>
    </nav>
  )
}

export default Navbar;