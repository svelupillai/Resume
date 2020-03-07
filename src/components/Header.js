import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';

export default class Header extends Component{

    scrollTo = (id) => {
        var elmnt = document.getElementById(id);
        elmnt.scrollIntoView();
    }
    render(){
        return (
            <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="pointer" onClick={() => this.scrollTo("Home")}>SV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav>
                    <Nav.Link onClick={() => this.scrollTo("AboutMe")}>About Me</Nav.Link>
                    <Nav.Link onClick={() => this.scrollTo("Education")}>Education</Nav.Link>
                    <Nav.Link onClick={() => this.scrollTo("Experience")}>Experience</Nav.Link>
                    <Nav.Link onClick={() => this.scrollTo("Skills")}>Skills</Nav.Link>
                    <Nav.Link onClick={() => this.scrollTo("Projects")}>Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );

    }
}
