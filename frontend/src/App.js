import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from './route-nav/Routes';
import JoblyApi from "./api";
import UserContext from "./auth/userContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(token !== "null" ? true : false);

  useEffect(() => {
    const getNewUserInfo = async () => {
      const res = await JoblyApi.getUser(username);
      setCurrentUser({...currentUser, ...res.user});
    };
    if (username !== "null") {
      getNewUserInfo();
    }
    return;
  }, [token, username]);
  
  const login = async (data) => {
    const res = await JoblyApi.login(data);
    localStorage.setItem("username", data.username);
    localStorage.setItem("token", res.token);
    setToken(res.token);
    setUsername(data.username);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem("token", "null");
    localStorage.setItem("username", "null");
    setToken("null");
    setCurrentUser({});
    setUsername("null");
    setLoggedIn(false);
  }

  const signup = async (data) => {
    const res = await JoblyApi.register(data);
    localStorage.setItem("username", data.username);
    localStorage.setItem("token", res.token);
    setToken(res.token);
    setUsername(data.username);
    setLoggedIn(true);
  }

  const edit = async (edit) => {
    const res = await JoblyApi.profileEdit(edit, currentUser.username)
    setCurrentUser({...currentUser, ...res});
  }

  const apply = async (evt) => {
    const id = evt.target.id;
    const res = await JoblyApi.applyForJob(currentUser.username, id)
    setCurrentUser({...currentUser, applications: [...currentUser.applications, res]})
  }
  console.log(currentUser);

  return (
    <BrowserRouter>
      <UserContext.Provider value={currentUser}>
        <Routes
          login={login}
          logout={logout}
          signup={signup}
          loggedIn={loggedIn}
          edit={edit}
          apply={apply}
        />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

// localStorage doesn't update token and/or username before user info ajax request, leading to unauthorization
// not sure how to fix
// everything updates only after refresh when theres api call involved