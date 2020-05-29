import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <NavBar bg="dark" variant="dark" style={{ justifyContent: "flex-end" }}>
      <div style={{ width: "100%" }}>
        <NavBar.Brand style={styles.navbarBrand}>
          <Link to="/">
            <img
              src={require("../assets/logo3.png")}
              className="d-inline-block align-top"
              height="75"
              alt="React Bootstrap logo"
            />
          </Link>
        </NavBar.Brand>
      </div>
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
    </NavBar>
  );
}

const styles = {
  navbarBrand: {
    marginLeft: 40,
  },
  nav: {
    fontSize: "1.5rem",
    marginRight: 50,
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: "50px",
  },
};
