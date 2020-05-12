import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropDown";

export default function Navigation() {
  return (
    <NavBar bg="dark" variant="dark" style={{ justifyContent: "center" }}>
      <Nav activeKey="/home" className="justify-content-end">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
      </Nav>
    </NavBar>
  );
}
