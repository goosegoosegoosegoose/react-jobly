import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignupForm = ({signup}) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    signup({...formData});
    setFormData(INITIAL_STATE);
    history.push("/companies");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange}></input>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange}></input>
        <label htmlFor="firstName">First name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}></input>
        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}></input>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignupForm;