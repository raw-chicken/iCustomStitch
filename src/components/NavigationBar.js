import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className='navbar-text'>
      <Container className='col-md-9 mx-auto'>
        <Navbar.Brand href="home">iCustomStitch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="custom-stitch">Stitch My Photo</Nav.Link>
            <Nav.Link href="pricing">Pricing and Sizing</Nav.Link>
            <Nav.Link href="faq">FAQ</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar