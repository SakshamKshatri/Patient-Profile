import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Delete from "./Delete.js";
import styled from "styled-components";

const Profile = () => {
  const [data, setData] = useState([]);
  const [fullName, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dob, setDob] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const fetchData = async () => {
    try {
      await axios
        .get(`http://localhost:8000/user/${id}`, {
          fullName: fullName,
          dob: dob,
          email: email,
          password: password,
        })
        .then((response) => setData(response.data));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  };



  // const newdob = new Date(data.dob);
  // const monthPortion = newdob.toISOString().split("T")[1];

  return (
    <>
      <Dashboard>
        <User>
          <img
            src="data:image/jpeg;base64,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"
            alt="jesse"
            style={imageStyle}
            className="profile-picture"
          />
          <ProfileName>{data.fullName}</ProfileName>
        </User>
        <Details>
          <Detail>Gender: {data.gender}</Detail>
          <Detail>Birthday: {}</Detail>
          <Detail>Phone: {data.phoneNumber}</Detail>
          <Detail>Address: {data.streetAddress}</Detail>
          <Detail>City: {data.city}</Detail>
          <Detail>Zip code: {data.zipCode}</Detail>
          <Detail>Registered date: {data.registeredDate}</Detail>
        </Details>
        <Notes>
          <label htmlFor="notes">Notes:</label>
          <Note id="notes" cols="30" rows="4" className="notes-textarea"></Note>
        </Notes>
        <Delete />
      </Dashboard>
    </>
  );
};

const Dashboard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`;

const User = styled.div`
  text-align: center;
`;

const ProfileName = styled.h2`
  margin-top: 10px;
  font-size: 24px;
`;

const Details = styled.div`
  flex-grow: 1;
  margin: 200px;
  border: 2px solid black;
  border-radius: 30px;
  padding: 30px;
`;

const Detail = styled.p`
  margin: 10px 0;
`;

const Notes = styled.div`
  margin-top: 20px;
`;

const Note = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default Profile;
