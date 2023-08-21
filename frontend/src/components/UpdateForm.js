import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [profilePicture, setFile] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/${id}`);
      const userData = response.data;

      setFullName(userData.fullName);
      setDob(userData.dob);
      setGender(userData.gender);
      setStreetAddress(userData.streetAddress);
      setPhoneNumber(userData.phoneNumber);
      setCity(userData.city);
      setZipCode(userData.zipCode);
      setFile(userData.profilePicture);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const updateHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("streetAddress", streetAddress);
      formData.append("phoneNumber", phoneNumber);
      formData.append("city", city);
      formData.append("zipCode", zipCode);
      formData.append("profilePicture", profilePicture);

      await axios.put(`http://localhost:8000/user/${id}/edit`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      });

      alert("Updated user successfully");
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="fullName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
          <option value="--">Gender</option>
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
            placeholder="city's zip code"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Update profile picture: </Form.Label>
          <Form.Control
            type="file"
            name="profilePicture"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>
        <Button variant="primary" onClick={updateHandler}>
          Update
        </Button>
      </Form>
    </>
  );
};

export default UpdateForm;
