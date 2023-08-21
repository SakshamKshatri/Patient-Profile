import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const Delete = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/user/${id}`;
  const deleteHandler = async () => {
    try {
      await axios.delete(url);
      alert("deleted successfully");
    } catch (error) {
      console.log("Something went wrong ", error);
    }
  };

  return (
    <Button variant="danger" onClick={deleteHandler}>
      Delete this user
    </Button>
  );
};

export default Delete;
