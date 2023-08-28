import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../styles/registrationForm.css";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar.js"

const Register = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  // const [fileData, setFileData] = useState("");
  const [profilePicture, setFile] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const url = "http://localhost:8000/register";
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(url).then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("profilePicture", profilePicture);
    formdata.append("fullName", fullName);
    formdata.append("dob", dob);
    formdata.append("gender", gender);
    formdata.append("streetAddress", streetAddress);
    formdata.append("city", city);
    formdata.append("phoneNumber", phoneNumber);
    formdata.append("zipCode", zipCode);
    formdata.append("email", email);
    formdata.append("password", password);

    const configuration = {
      method: "post",
      url: url,
      data: formdata,
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
        alert("registered successfully");
        navigate("/");
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
    <Navbar />
      <div className="registration-page">
        <h2>Register</h2>
        <div className="registration-form">
          <Form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
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

            <div className="spacing" />

            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="--">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Enter your phone number:</Form.Label>

              <Form.Control
                type="text"
                maxLength="12"
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
                placeholder="city's zip code"
              />
            </Form.Group>

            <Form.Group controlId="profilePicture">
              <Form.Label>Insert your profile picture</Form.Label>
              <Form.Control
                type="file"
                name="profilePicture"
                // value={profilePicture}
                onChange={(e) => setFile(e.target.files[0])}
                placeholder="upload profile picture"
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
{/* 
            <Button
              variant="primary"
              type="submit"
              
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button> */}
            <button class="btn btn-primary mt-2" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            {/* {register ? (
              <p className="text-success">You are registered successfully</p>
            ) : (
              <p className="text-danger">still not registered</p>
            )} */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
