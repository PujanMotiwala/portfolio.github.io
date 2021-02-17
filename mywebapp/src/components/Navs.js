import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';


//Header component is now reusable component
const Navs = () => {
    return(
        <div className="Navs">
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home"><b>Pujan Motiwala</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="index.html">About</Nav.Link>
                            <Nav.Link href="blog.html">Blog</Nav.Link>
                            <Nav.Link href="topics.html">Topics</Nav.Link>
                            <Nav.Link href="products.html">Products</Nav.Link>
                            <Nav.Link href="links.html">Links</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Navs;