import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaDumbbell } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar className="py-3 navigation-bar">
      <Container>
        <Navbar.Brand>
          <FaDumbbell size={32} className="nav-icon"></FaDumbbell>
          <strong className="text-white ms-2 fs-4">The Daily Burn</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-cart-container"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
