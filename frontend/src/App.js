import { useState, useEffect } from "react";
// import { Container, Col, Row, Button } from "react-bootstrap";

import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UpdateForm from "./components/UpdateForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/user/:id/edit" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
