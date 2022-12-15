import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {

  /// 41:11 https://www.youtube.com/watch?v=QwarZBtFoFA
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
    <Container className='col-md-9 mx-auto'>
      <Navbar.Brand href="home">iCustomStitch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="custom-stitch">Stitch My Photo</Nav.Link>
          <Nav.Link href="products">Products</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link>
          <Nav.Link href="faq">FAQ</Nav.Link>
          <Nav.Link href="contact">Contact Us</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar