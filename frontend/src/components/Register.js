import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import { redirect } from "react-router-dom";
import "../styles/registrationForm.css";

const Register = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
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
        gender,
        phoneNumber,
        streetAddress,
        city,
        zipCode,
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
      <div className="registration-form-container">
        <Form onSubmit={(e) => handleSubmit(e)}>
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

          <select
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Enter your phone number:</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </Form.Group>

          <Form.Group controlId="streetAddress">
            <Form.Label>Enter your street address</Form.Label>
            <Form.Control
              type="text"
              name="streetAddress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              placeholder="Enter your full street address"
            />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>Set your city</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city"
            />
          </Form.Group>

          <Form.Group controlId="zipCode">
            <Form.Label>Set your zipCode</Form.Label>
            <Form.Control
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter your full gender"
            />
          </Form.Group>

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
          >
            Submit
          </Button>
          {register ? (
            <p className="text-success">You are registered successfully</p>
          ) : (
            <p className="text-danger">still not registered</p>
          )}
        </Form>
      </div>
    </>
  );
};

export default Register;
