import { useState, useEffect } from "react";
// import { Container, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
