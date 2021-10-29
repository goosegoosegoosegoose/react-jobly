import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap"

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
    <div className="my-2 mx-2">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-4">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="my-4">  
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control type="text" name="password" value={formData.password} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="my-4">   
          <Form.Label htmlFor="firstName">First name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="my-4">          
          <Form.Label htmlFor="lastName">Last name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="text" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </div>
  )
}

export default SignupForm;