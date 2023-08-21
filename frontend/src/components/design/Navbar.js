import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import LogoutButton from "../LogoutButton.js";

const Navbar = () => {
  const headerStyles = {
    height: "50px",
    backgroundColor: "#4a4e69",
    color: "white",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "25px",
  };

  const buttonStyles = {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  };

  return (
    <header style={headerStyles}>
      <NavbarItems>
        <NavbarItem>
          <a href="/" style={linkStyles}>
            Promed
          </a>
        </NavbarItem>
        <LogoutButton style={buttonStyles} />
      </NavbarItems>
    </header>
  );
};

const NavbarItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavbarItem = styled.li`
  margin-right: 20px;
`;

export default Navbar;
