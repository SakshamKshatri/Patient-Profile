import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UpdateButton = ({ userId, style }) => {
  return (
    <Link to={`/user/${userId}/edit`}>
      <Button style={style}>Update user</Button>
    </Link>
  );
};

export default UpdateButton;
