import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `http://localhost:8000/user/${id}`;
  const deleteHandler = async () => {
    try {
      await axios.delete(url);
      alert("deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Something went wrong ", error);
    }
  };

  return (
    <Button variant="danger" onClick={deleteHandler}>
      Delete
    </Button>
  );
};

export default Delete;
