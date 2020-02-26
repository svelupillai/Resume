import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';

function Header(){
    return (
        <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#Home">SV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav>
                    <Nav.Link href="#AboutMe">About Me</Nav.Link>
                    <Nav.Link href="#Education">Education</Nav.Link>
                    <Nav.Link href="#Experience">Experience</Nav.Link>
                    <Nav.Link href="#Experience">Skills</Nav.Link>
                    <Nav.Link href="#Experience">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;