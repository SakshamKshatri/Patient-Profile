import React, { useState, useEffect } from "react";
import Navbar from "./design/Navbar.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  return (
    <>
      <Navbar />

      {data.map((dataObj, index) => {
        console.log(dataObj.gender);
        return (
          <PatientBlock>
            <h2>{dataObj.fullName}</h2>
            <p style={{ marginBottom: 0 }}>
              Gender: {dataObj.gender} Phone number: {dataObj.phoneNumber} City:{" "}
              {dataObj.city}
            </p>
          </PatientBlock>
        );
      })}
    </>
  );
};

const PatientBlock = styled.section`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  background-color: #f7f7f7;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default Home;
