import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

const NavBar = props => {

    const clickBtn = (event) => {
        const page = event;
        document.getElementById('home').classList.add('hide');
        document.getElementById('services').classList.add('hide');
        document.getElementById('color').classList.add('hide');
        document.getElementById(page).classList.remove('hide');
    };
  
    const navbar = {
        width: '100vw',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '10vh'
    }

    return (
        <Navbar bg="dark" variant="dark" sticky='top' style={navbar}>
            <Navbar.Brand onClick={() => clickBtn('home')} style={{ cursor: 'pointer' }}>Barry Rollan Studio</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link onClick={() => clickBtn('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => clickBtn('services')}>Services</Nav.Link>
            <Nav.Link onClick={() => clickBtn('color')}>O&amp;M Cor Color</Nav.Link>
            </Nav>
        </Navbar>
    )

};

export default NavBar;