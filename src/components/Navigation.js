import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropDown";

export default function Navigation() {
  return (
    <NavBar bg="dark" variant="dark" style={{ justifyContent: "flex-end" }}>
      <div style={{ width: "100%" }}>
        <NavBar.Brand href="#home">Investment Calculator</NavBar.Brand>
      </div>
      <Nav activeKey="/home" style={{ marginRight: 50 }}>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </NavBar>
  );
}
