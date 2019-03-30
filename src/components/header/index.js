import React from 'react'
// or less ideally
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './style.css'

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand>
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' React Bootstrap'}
      </Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
      <NavDropdown title="Client" id="basic-nav-dropdown">
        <NavDropdown.Item><Link className="d-block no-decoration" to="/client/new"> New </Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item> Separated link</NavDropdown.Item>
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