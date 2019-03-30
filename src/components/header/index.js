import React from 'react'
// or less ideally
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' React Bootstrap'}
    </Navbar.Brand>
    <Nav className="mr-auto">
      <NavDropdown title="Client" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Add</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
)

export default Header