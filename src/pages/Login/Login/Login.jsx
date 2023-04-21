import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-50 mx-auto mt-5">
      <h3>Please Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>
        <Button className='mb-2' variant="primary" type="submit">
          Login
        </Button>{" "}
        <br />
        <Form.Text className="text-secondary">
          Don't have an Account?<Link className="ps-2" to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
