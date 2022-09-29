import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaDumbbell } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar className="py-3 navigation-bar" expand="md">
      <Container>
        <Navbar.Brand>
          <FaDumbbell size={32} className="nav-icon"></FaDumbbell>
          <strong className="text-white ms-2 fs-4">The Daily Burn</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-item">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
