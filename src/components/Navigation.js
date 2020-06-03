import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand style={styles.navbarBrand}>
        <Link to="/">
          <img
            src={require("../assets/nvestio-logo-colors.png")}
            height="75"
            alt="React Bootstrap logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home" style={styles.nav}>
          <Nav.Item>
            <Link to="/" style={styles.link}>
              Calculator
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" style={styles.link}>
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact" style={styles.link}>
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const styles = {
  navbarBrand: {
    marginLeft: 0,
  },
  nav: {
    fontSize: "25px",
    marginRight: 50,
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: "50px",
  },
};
