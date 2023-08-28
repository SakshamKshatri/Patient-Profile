import React from "react";
import { Link } from "react-router-dom";

const linkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "25px",
  paddingRight: "10px",
};

const SignupButton = ({ style }) => {
  return (
    <Link to="/signup" style={linkStyles}>
      <button style={style}>Signup</button>
    </Link>
  );
};

export default SignupButton;
