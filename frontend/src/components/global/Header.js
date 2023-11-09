import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Logo, StyledNavbar } from "./Header.styles.js";
import {RiAdminFill} from "react-icons/ri";
import { CartNumber } from "./Header.styles.js";
import React from 'react';

export default function Header() {
  return (
    <StyledNavbar collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand href="#home"><Logo>Cheap<span>City</span></Logo></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#features" className="text-light"><RiAdminFill /> Hi, Admin</Nav.Link>
          <Nav.Link href="#pricing" className="text-light"></Nav.Link>
          <NavDropdown title={<span className="text-light">My Orders</span>} id="collapsible-nav-dropdown">
            <NavDropdown.Item className="text-dark" href="#action/3.1">Track Order</NavDropdown.Item>
            <NavDropdown.Item className="text-dark" href="#action/3.3">Order History</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link className="text-light" href="#deets">Cart <CartNumber>0</CartNumber></Nav.Link>
          <Nav.Link className="text-light" eventKey={2} href="#memes">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </StyledNavbar>
  )
}
