import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';

export default class Footer extends Component{

    render(){
        return (
            <Navbar bg="dark grey" variant="dark grey">
                <Nav className="text-white">Copyright 2019-{new Date().getFullYear()}</Nav>
                <Navbar.Collapse></Navbar.Collapse>
                <Nav className="text-white">
                    Find me here <i className="fas fa-arrow-right pt-1 pl-3"></i> 
                <a target="_blank"  rel="noopener noreferrer" href="https://ca.linkedin.com/in/senagavelupillai"><i className="fab fa-linkedin-in ml-4 mt-1 text-white"></i></a>
                            <a target="_blank"  rel="noopener noreferrer" href="https://github.com/svelupillai"><i className="fab fa-github ml-2 mt-1 text-white"></i></a>
                            <a target="_blank"  rel="noopener noreferrer" href="mailto:senagav@gmail.com?Subject=Hi"><i className="fa fa-envelope ml-2 mt-1 text-white"></i></a>
                </Nav>
            </Navbar>
            );

    }
}
