import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';

//href="index.html"
//Header component is now reusable component
const Navs = () => {
    return(
        <div className="Navs">
            <div>
                <Navbar bg="white" variant="dark" expand="md" fluid>
                    <Navbar.Brand href="/"><b>Pujan Motiwala</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/about">
                                <Nav.Link >About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/topics">
                                <Nav.Link>Topics</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products">
                                <Nav.Link>Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/links">
                                <Nav.Link>Links</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Navs;