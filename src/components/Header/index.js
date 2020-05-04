import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <Navbar>
  <Navbar.Brand href="#home">Prashil Bhimani</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#timeline">Timeline</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
}

export default Header;