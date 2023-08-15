import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { redirect } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [fullName, setFullname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const url = "http://localhost:8000/login";

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(url).then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: url,
      data: {
        // fullName,
        // dob,
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        redirect("/");
        alert("logged in successfully");
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Login</h2>
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
    </>
  );
};

export default Login;
