import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <NavBar bg="dark" variant="dark" style={{ justifyContent: "flex-end" }}>
      <div style={{ width: "100%" }}>
        <NavBar.Brand href="#home">Investment Calculator</NavBar.Brand>
      </div>
      <Nav activeKey="/home" style={{ marginRight: 50 }}>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to="/about" style={styles.link}>
              About
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to="/contact" style={styles.link}>
              Contact
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </NavBar>
  );
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  },
};
