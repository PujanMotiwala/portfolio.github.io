import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown';

//href="index.html"
//Header component is now reusable component
const Navs = () => {
    return(
        <div className="Navs">
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/"><b>Pujan Motiwala</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/About">
                                <Nav.Link >About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Blog">
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Topics">
                                <Nav.Link>Topics</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Products">
                                <Nav.Link>Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Links">
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