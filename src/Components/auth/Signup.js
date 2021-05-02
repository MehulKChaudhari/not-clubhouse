import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";

export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordRef.current.value === passwordconfirmRef.current.value) {
      return setError("Passwords are not same")
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Sorry couldn't create a account, try again!")
    }

    setLoading(false);
  };
  
  return (
      <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordconfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
        {error && <Alert variant="danger" className="Alert">{error}</Alert>}
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
};
