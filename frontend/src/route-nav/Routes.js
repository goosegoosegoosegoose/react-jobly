import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import CompanyList from "../company/CompanyList";
import CompanyDetail from "../company/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import JobList from "../jobs/JobList";
import ProfileForm from "../profile/ProfileForm";


const Routes = ({login, logout, signup, loggedIn, edit, apply}) => {

  if (!loggedIn) {
    return(
      <>
        <Route path="/">
          <Navbar logout={logout} loggedIn={loggedIn}/>
        </Route>
        <Switch>
          <Route exact path="/">
            <p>h</p>
          </Route>
          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>
          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </>
    )
  }

  return (
    <>
      <Route path="/">
        <Navbar logout={logout} loggedIn={loggedIn}/>
      </Route>
      <Switch>
        <Route exact path="/">
          <p>h</p>
        </Route>
        <Route exact path="/companies">
          <CompanyList />
        </Route>
        <Route path="/companies/:handle">
          <CompanyDetail apply={apply}/>
        </Route>
        <Route exact path="/jobs">
          <JobList apply={apply}/>
        </Route>
        <Route exact path="/profile">
          <ProfileForm edit={edit}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default Routes;