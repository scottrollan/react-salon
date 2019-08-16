import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

const NavBar = props => {

    return (
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Navbar.Brand href="#home">Barry Rollan Studio</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Service</Nav.Link>
            <Nav.Link href="#color">O&M Cor Color</Nav.Link>
            </Nav>
        </Navbar>
    )

};

export default NavBar;