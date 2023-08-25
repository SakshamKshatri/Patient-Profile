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
        <p>Basic Info:</p>

        <p>Gender</p>
        <p>Phone Number</p>
        <p>City</p>
        <p>Registerd Date</p>
      </ColumnTitle>

      {sortedData.map((dataObj, index) => (
        <Link key={dataObj._id} to={`/user/${dataObj._id}`} style={linkStyles}>
          <PatientBlock>
            <ProfilePicture>
              <img src={dataObj.profilePicture.url} alt={dataObj.fullName} />
            </ProfilePicture>
            <Info>
              <FullName>{dataObj.fullName}</FullName>
              <Gender>{dataObj.gender}</Gender>
              <PhoneNumber>{dataObj.phoneNumber}</PhoneNumber>{" "}
              <City>{dataObj.city}</City>
              <RegisteredDate>{dataObj.registeredDate}</RegisteredDate>{" "}
            </Info>
          </PatientBlock>
        </Link>
      ))}
    </>
  );
};

const ColumnTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5;
  margin: 10px;
  padding: 10px;
  max-width: 100%;
  max-height: 300px;
  color: #0077b6;
`;

const PatientBlock = styled.section`
  display: flex; /* Use flexbox for horizontal layout */
  /* justify-content: space-between;
  flex-direction: row; */
  align-items: center; /* Center align items vertically */
  gap: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  max-width: 100%;
  max-height: 300px;
  background-color: #f7f7f7;
  transition: background-color 0.3s ease;

  h6 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ProfilePicture = styled.div`
  max-width: 80px;
  max-height: 80px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* object-fit: cover; */

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  h5,
  h6 {
    text-align: center;
    margin: 5px 0;
  }
`;

const FullName = styled.h5`
  color: #023047;
`;

const Gender = styled.h6`
  color: #023047;
`;

const PhoneNumber = styled.h6`
  color: #023047;
`;

const City = styled.h6`
  color: #023047;
`;

const RegisteredDate = styled.h6`
  color: #023047;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: 10px;
  padding: 10px;
  max-width: 100%;
  max-height: 300px;

  h5 {
    margin-right: 50px;
  }

  ${FullName} {
    grid-column: 1 / 2;
  }

  ${Gender} {
    grid-column: 2 / 3;
  }

  ${PhoneNumber} {
    grid-column: 3 / 4;
  }

  ${City} {
    grid-column: 4 / 5;
  }

  ${RegisteredDate} {
    grid-column: 5 / 6;
  }
`;

const PatientNumber = styled.h5`
  display: inline;
  color: #0077b6;
  margin: 10px;
`;

export default Home;
