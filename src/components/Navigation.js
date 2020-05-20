import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <NavBar bg="dark" variant="dark" style={{ justifyContent: "flex-end" }}>
      <div style={{ width: "100%" }}>
        <NavBar.Brand href="#home">Investio</NavBar.Brand>
      </div>
      <Nav activeKey="/home" style={{ marginRight: 50 }}>
        <Nav.Item>
          <Link to="/" style={styles.link}>
            Home
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
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: "50px",
  },
};
