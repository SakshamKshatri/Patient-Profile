import React from "react";
import { Link } from "react-router-dom";

const linkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "25px",
  paddingRight: "10px",
};

const LoginButton = ({ style }) => {
  return (
    <Link to="/login" style={linkStyles}>
      <button style={style}>Login </button>
    </Link>
  );
};

export default LoginButton;
