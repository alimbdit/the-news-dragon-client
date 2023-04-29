import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";

const Register = () => {

  const {createUser, profileUpdate} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate()

 const location = useLocation();
 console.log(location)

 const from = location.state?.from?.from?.pathname || "/category/0";


  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
      navigate(from)
    })
    .catch(error => {
      console.log(error)
    })

    // console.log(name, photo, email, password)

    profileUpdate(name, photo)
    .then(() => {
      console.log('profile updated')
    })
    .catch(error => {
      console.log(error)
    })
  }


  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  return (
    <Container className="mx-auto w-25">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            required
            name="photo"
            placeholder="Enter your photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          onClick={handleAccepted}
          type="checkbox" 
          name='accept' 
          label={<>Accept <Link to='/terms'>terms and conditions.</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have An Account ? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
