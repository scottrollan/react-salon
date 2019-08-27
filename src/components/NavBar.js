import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import EmailLink from './EmailLink';
import TextLink from './TextLink';

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
        height: '10vh !important',
        paddingBottom: '0 !important'
    }

    return (
        <div>
        <Navbar bg="dark" variant="dark" sticky='top' style={navbar}>
            <Navbar.Brand onClick={() => clickBtn('home')} style={{ cursor: 'pointer' }}>Barry Rollan Studio</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link 
                onClick={() => clickBtn('home')}
                className="navLink"
                >Home
            </Nav.Link>
            <Nav.Link 
                onClick={() => clickBtn('services')}
                className="navLink"             
                >Services
            </Nav.Link>
            <Nav.Link 
                onClick={() => clickBtn('color')}
                className="navLink"
                >O&amp;M Cor Color
            </Nav.Link>
            </Nav>
        </Navbar>
        <TextLink />
        <EmailLink />
        </div>
    )

};

export default NavBar;