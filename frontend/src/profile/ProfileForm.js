import React, { useContext, useState } from "react";
import UserContext from "../auth/userContext";

const ProfileForm = ({edit}) => {
  const currentUser = useContext(UserContext);
  const INITIAL_STATE = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  console.log(currentUser);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    edit({...formData});
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <p>{currentUser.username}</p>
        <label htmlFor="firstName">First Name</label><br />
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /><br />
        <label htmlFor="lastName">Last Name</label><br />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /><br />
        <label htmlFor="email">Email</label><br />
        <input type="text" name="email" value={formData.email} onChange={handleChange} /><br />
        <label htmlFor="password">Confirm password to make changes:</label><br />
        <input type="text" name="password" value={formData.password} onChange={handleChange} /><br />
        <button>Save Changes</button>
      </form>
    </div>
  )
}

export default ProfileForm;