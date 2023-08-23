import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/header.css";
import UpdateButton from "./UpdateButton.js";
import Delete from "./Delete.js";
import { useAuth } from "../Authcontext.js";

const Header = () => {
  const [data, setData] = useState([]);
  const [fullName, setFullname] = useState("");

  const { id } = useParams();

  const { authenticated } = useAuth();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/${id}`);
      const userData = response.data;
      setData(userData);
      setFullname(userData.fullName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const buttonStyles = {
    // marginLeft: "900px",
    backgroundColor: "#8d99ae",
    color: "white",
  };

  return (
    <>
      <header>
        <h4 style={{ color: "#8d99ae" }}>
          Patient List{" "}
          <p>
            {">"} {data.fullName}
          </p>
        </h4>

        <hr />
      </header>
    </>
  );
};

export default Header;
