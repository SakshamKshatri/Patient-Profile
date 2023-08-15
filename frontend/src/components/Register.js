import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { redirect } from "react-router-dom";

const Register = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [register, setRegister] = useState(false);
  const url = "http://localhost:8000/register";
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(url).then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    const configuration = {
      method: "post",
      url: url,
      data: {
        fullName,
        dob,
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
        redirect("/");
        alert("registered successfully");
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* full name */}
        <Form.Group controlId="fullName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter your full name"
          />
        </Form.Group>

        <Form.Group controlId="dob">
          <Form.Label>Enter your date of birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="date of birth"
          />
        </Form.Group>

        {/* email */}
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

        {/* password */}
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

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        {register ? (
          <p className="text-success">You are registered successfully</p>
        ) : (
          <p className="text-danger">still not registered</p>
        )}
      </Form>
    </>
  );
};

export default Register;
