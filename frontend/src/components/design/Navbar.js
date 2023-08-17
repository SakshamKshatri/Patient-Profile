import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const headerStyles = {
    height: "35px",
    backgroundColor: "#333",
    color: "white",
    padding: "10px;",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <header style={headerStyles}>
      <NavbarItems>
        <NavbarItem>
          <a href="/" style={linkStyles}>
            Promed
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="/" style={linkStyles}>
            Profile
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="/" style={linkStyles}>
            About
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="/" style={linkStyles}>
            Contact
          </a>
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
`;

export default Navbar;
