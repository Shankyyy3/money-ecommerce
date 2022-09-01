import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavbarComponent = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MoneyApp</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/addProduct">Add Product</Nav.Link>
          <Nav.Link href="/upadateandDelete">Update & Delete</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent