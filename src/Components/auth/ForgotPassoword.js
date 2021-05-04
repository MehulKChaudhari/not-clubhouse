import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetpassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetpassword(emailRef.current.value);
      setMessage("Email sent, Check your inbox for reset link");
    } catch {
      setError("failed to reset password! ");
    }

    setLoading(false);
  };

  return (
    <>
      {message && (
        <Alert variant="success" className="Alert">
          {message}
        </Alert>
      )}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      {error && (
        <Alert variant="danger" className="Alert">
          {error}
        </Alert>
      )}

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Register</Link>
      </div>
    </>
  );
};
