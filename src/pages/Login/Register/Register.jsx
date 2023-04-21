import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="w-50 mx-auto mt-5">
      <h3 className="mb-4">Register your account</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" name="photo" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Photo URL" required />
        </Form.Group>
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
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button className="mb-2" variant="primary" type="submit">
          Register
        </Button>{" "}
        <br />
        <Form.Text className="text-secondary">
          Already have an Account?
          <Link className="ps-2" to="/login">
            Login
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;