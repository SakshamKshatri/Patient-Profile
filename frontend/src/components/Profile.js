import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Delete from "./Delete.js";
import Navbar from "./design/Navbar.js";
import { useAuth } from "../Authcontext.js";
import UpdateButton from "./UpdateButton.js";

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
  const [profilePicture, setFile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticated } = useAuth();

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/${id}`);
      const userData = response.data;
      setData(userData);
      setFullname(userData.fullName);
      setGender(userData.gender);
      setPhoneNumber(userData.phoneNumber);
      setStreetAddress(userData.streetAddress);
      setCity(userData.city);
      setZipCode(userData.zipCode);
      setDob(userData.dob);
      setRegisteredDate(userData.registeredDate);
      setFile(userData.profilePicture); // Set profile picture URL
      setEmail(userData.email);
      setPassword(userData.password);
      console.log(userData);
      if ("profilePicture" in userData) {
        console.log("Profile Picture URL:", userData.profilePicture);
        setFile(userData.profilePicture);
      } else {
        console.log("Profile Picture URL not found in user data");
      }
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
    objectFit: "cover",
  };

  const dob_format = new Date(data.dob);

  return (
    <>
      <Navbar />
      <Dashboard>
        <User>
          {console.log("ProfilePicture url: " + profilePicture)}
          <img
            src={profilePicture.url}
            alt="profile"
            style={imageStyle}
            className="profilePicture"
          />
          <ProfileName>{data.fullName}</ProfileName>
        </User>
        <Details>
          <Detail>Gender: {data.gender}</Detail>
          <Detail>
            Birthday: {dob_format.getMonth() + 1 + "-" + dob_format.getDate()}
          </Detail>
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
      </Dashboard>
      <ButtonsWrapper>
        <ButtonsSection>
          {authenticated && <UpdateButton userId={id} />}
        </ButtonsSection>
        <ButtonsSection>{authenticated && <Delete />}</ButtonsSection>
      </ButtonsWrapper>
    </>
  );
};

const responsiveBreakpoint = "768px";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px;

  @media (min-width: ${responsiveBreakpoint}) {
    flex-direction: row;
  }
`;

const Details = styled.div`
  flex-grow: 1;
  margin: 20px;
  border: 2px solid black;
  border-radius: 30px;
  padding: 20px;

  @media (min-width: ${responsiveBreakpoint}) {
    margin: 0 20px;
    padding: 30px;
  }
`;

const User = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${responsiveBreakpoint}) {
    margin-bottom: 0;
  }
`;

const ProfileName = styled.h2`
  margin-top: 10px;
  font-size: 24px;
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

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 25px;

  @media (min-width: ${responsiveBreakpoint}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0;
  }
`;

const ButtonsSection = styled.div`
  margin-bottom: 20px;
  /* display: flex; */
  /* justify-content: center; */

  @media (min-width: ${responsiveBreakpoint}) {
    margin-bottom: 0;
  }
`;

export default Profile;
