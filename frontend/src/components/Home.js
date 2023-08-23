import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Resize } from "@cloudinary/url-gen/actions";
import Navbar from "./Navbar.js";

const Home = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:8000/";

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const linkStyles = {
    marginTop: 0,
    textDecoration: "none",
  };

  const paraStyles = {
    marginRight: "20px",
    color: "#1d3557",
  };

  const numberStyle = {
    display: "inline",
    fontWeight: 200,
    color: "blue",
  };

  function objectLength(obj_data) {
    const number = Object.keys(obj_data).length;
    return number;
  }

  // sorting the data in alphabetical order
  const sortedData = data
    .slice()
    .sort((a, b) => a.fullName.localeCompare(b.fullName));

  return (
    <>
      <Navbar />

      <PatientNumber>
        Patients: <p style={numberStyle}>{objectLength(data)}</p>
      </PatientNumber>

      <ColumnTitle>
        <p style={(paraStyles, { color: "#0077b6" })}>Basic info</p>
        {/* <p style={{ color: "#0077b6" }}>Gender</p> */}
        <p style={{ color: "#0077b6" }}>Gender</p>
        <p style={{ color: "#0077b6" }}>Phone Number</p>
        <p style={{ color: "#0077b6" }}>City</p>
        <p style={{ color: "#0077b6" }}>Registerd Date</p>
      </ColumnTitle>

      {sortedData.map((dataObj, index) => (
        <Link key={dataObj._id} to={`/user/${dataObj._id}`} style={linkStyles}>
          <PatientBlock>
            <ProfilePicture>
              <img src={dataObj.profilePicture.url} alt={dataObj.fullName} />
            </ProfilePicture>

            <h6>{dataObj.gender}</h6>
            <h6>{dataObj.phoneNumber}</h6>
            <h6>{dataObj.city}</h6>
            <h6>{dataObj.registeredDate}</h6>

            <h5>{dataObj.fullName}</h5>

            {/* Assuming there's a registeredDate property */}
          </PatientBlock>
        </Link>
      ))}
    </>
  );
};

const ColumnTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin: 10px;
  padding: 5px;
`;

const PatientBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Adjust as needed */
  gap: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  background-color: #f7f7f7;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ProfilePicture = styled.div`
  max-width: 150px;
  max-height: 150px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: "cover";
  }
`;

const FullName = styled.div`
  color: "red";
`;

const PatientNumber = styled.h5`
  display: inline;
  color: #0077b6;
  margin: 10px;
`;

export default Home;
