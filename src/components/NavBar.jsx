import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
     <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tienda Online</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Productos</Nav.Link>
                            {/* <Nav.Link href="#link"><CartWidget /></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    </div>
    ) 
}

