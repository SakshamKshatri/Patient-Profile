import React from "react";
import styled from "styled-components";
import { useAuth } from "../Authcontext.js";
import LogoutButton from "./LogoutButton.js";
import LoginButton from "./LoginButton.js";
import RegisterButton from "./RegisterButton.js";
import "../styles/navbar.css";

const Navbar = () => {
  const { authenticated } = useAuth();

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
    <header className="headerStyles" id="navbar">
      <NavbarItems>
        <NavbarItem>
          <a href="/" style={linkStyles}>
            Promed
          </a>
        </NavbarItem>

        <NavbarItem>
          {authenticated && <LogoutButton style={buttonStyles} />}
        </NavbarItem>

        <NavbarItem>
          {!authenticated && <LoginButton style={buttonStyles} />}
        </NavbarItem>

        <NavbarItem>
          {!authenticated && <RegisterButton style={buttonStyles} />}
        </NavbarItem>
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
  &:hover {
    color: #e0e0e0;
  }
`;

export default Navbar;
