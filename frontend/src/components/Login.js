import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { redirect } from "react-router-dom";
import axios from "axios";
import "../styles/loginForm.css";
import { useAuth } from "../Authcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, setLogin] = useState(false);

  const [data, setData] = useState([]);

  const { login } = useAuth(); // Use the login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (response.data.token) {
        login(response.data.token); // Call the login function with the token
        alert("Logged in successfully");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="login-form">
        <h1>Welcome back</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {/* submit button */}
          <Button
            varient="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
