import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";
  console.log(location, from)

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      navigate(from, {replace:true})
      console.log(loggedUser)
      
    })
    .catch(error => {
      console.log(error)
    })

    form.reset()
    console.log(email, password)

  }

  return (
    <Container className="mx-auto w-25">
        <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required name='email' placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
        Don't Have An Account ? <Link to='/register' state={{from:location.state}}>Register</Link>
          </Form.Text>
          <Form.Text className="text-success">
            
          </Form.Text>
          <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
