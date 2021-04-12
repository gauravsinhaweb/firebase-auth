import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function GoogleSignHandler() {
    await signInWithGoogle();
    history.push("/dashboard");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      console.log("Failed to create an account");
    }
    // emailRef.current.value("");
    // passwordRef.current.value("");
    setLoading(false);
  }

  return (
    <>
      <div>
        <div onClick={GoogleSignHandler}>
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Open+Sans"
          />
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              <p>Sign in with google</p>
            </p>
          </div>{" "}
        </div>
      </div>{" "}
      <div className="w-100 text-center">
        <strong>OR</strong>
      </div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center">
        {" "}
        Already have an account? <Link to="/">Log In</Link>{" "}
      </div>
    </>
  );
}
