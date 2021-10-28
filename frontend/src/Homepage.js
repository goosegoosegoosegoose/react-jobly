import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./auth/userContext";

const Homepage = () => {
  const history = useHistory();
  const user = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <h1><b>Jobly</b></h1>
        <p>All the jobs in one, convenient place.</p><br/>
        <button onClick={history.push("/login")}>Log in</button>
        <button onClick={history.push("/signup")}>Sign up</button>
      </div>
    )
  };

  return (
    <div>
      <h1><b>Jobly</b></h1>
      <p>All the jobs in one, convenient place.</p><br/>
      <h2><b>Welcome Back, {user.username}</b></h2>
    </div>
  )
}

export default Homepage;