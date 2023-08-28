import React from "react";
import { Link } from "react-router-dom";

const linkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "25px",
};

const RegisterButton = ({ style }) => {
  return (
    <Link to="/register" style={linkStyles}>
      <button style={style}> Create new Patient</button>
    </Link>
  );
};

export default RegisterButton;
