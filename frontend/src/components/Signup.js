import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/loginForm.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:8000/signup";
  const [data, setData] = useState([]);
  const [signup, setSignup] = useState(false);

  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log("Something is wrong: " + error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const configuration = {
      method: "post",
      url: url,
      data: data,
    };

    axios(configuration)
      .then((result) => {
        setSignup(true);
        alert("registered successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Axios Error:", err);
      });
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="login-form">
        <h1>Welcome to Promed</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="mt-2"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Signup;
