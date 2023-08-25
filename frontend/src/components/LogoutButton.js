import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const LogoutButton = ({ style }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a logout request to the backend
      await axios.post("http://localhost:8000/logout");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "25px",
    paddingRight: "10px",
  };

  return (
    <>
      <Link style={linkStyles}>
        <button onClick={handleLogout} style={style}>
          Logout
        </button>
      </Link>
    </>
  );
};

export default LogoutButton;
