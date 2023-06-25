import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';


const scrollTo = (id) => {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView();
}

const Header = () =>
(
    <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
    <Navbar.Brand className="pointer" onClick={() => scrollTo("Home")}>SV</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav>
            <Nav.Link eventKey="1" onClick={() => scrollTo("AboutMe")}>About Me</Nav.Link>
            <Nav.Link eventKey="4" onClick={() => scrollTo("Skills")}>Skills</Nav.Link>
            <Nav.Link eventKey="3" onClick={() => scrollTo("Experience")}>Experience</Nav.Link>
            <Nav.Link eventKey="2" onClick={() => scrollTo("Education")}>Education</Nav.Link>
            <Nav.Link eventKey="5" onClick={() => scrollTo("Projects")}>Projects</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
);

export default Header;


