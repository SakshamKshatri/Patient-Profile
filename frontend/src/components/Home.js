import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "../styles/home.css";

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
    textDecoration: "none",
    color: "#0077b6",
  };

  const numberStyle = {
    display: "inline",
    fontWeight: 200,
    color: "blue",
  };

  const onClickTr = () => {
    console.log("table row clicked");
    sortedData.map((val, index) => {
      return <Link path={`/user/${val._id}`} />;
    });
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

      <table id="patients">
        <tr>
          <th>Profile Picture</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>City</th>
          <th>Registered Date</th>
          <th>Visit Link</th>
        </tr>

        {sortedData.map((dataObj, key) => {
          return (
            <tr key={key} onClick={onClickTr} className="patient-block">
              {/* <Link
                key={dataObj._id}
                to={`/user/${dataObj._id}`}
                style={linkStyles}
              > */}

              <td>
                <ProfilePicture>
                  <img src={dataObj.profilePicture.url} alt="" />
                </ProfilePicture>
              </td>
              <td>{dataObj.fullName}</td>
              <td>{dataObj.gender}</td>
              <td>{dataObj.phoneNumber}</td>
              <td>{dataObj.city}</td>
              <td>{dataObj.registeredDate}</td>
              <td>
                <Link
                  key={dataObj._id}
                  to={`/user/${dataObj._id}`}
                  // style={linkStyles}
                >
                  Visit {dataObj.fullName}{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
              </td>

              {/* </Link> */}
            </tr>
          );
        })}
      </table>
    </>
  );
};

const PatientBlock = styled.section`
  display: flex; /* Use flexbox for horizontal layout */
  /* justify-content: space-between;
  flex-direction: row; */
  align-items: center; /* Center align items vertically */
  gap: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  /* max-width: 100%; */
  width: 100%;
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
