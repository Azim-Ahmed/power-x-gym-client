import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <Navbar className="navbar" bg="none" variant="light">
            {/* <div className="container"> */}
            <Navbar.Brand><Link to="/" className="logo">POWER <span className="special">X</span></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="text-center" id="basic-navbar-nav">
                <Nav className="ml-auto header-link">
                    <Link className="nav-link" to="/home">Home</Link>
                    <Link className="nav-link" to="#">Services</Link>
                    <Link className="nav-link" to="/classes">Our Classes</Link>
                    <Link className="nav-link" to="#">About us</Link>
                    <Link className="nav-link" to="#">Blog</Link>
                    <Link className="nav-link" to="/pricing">Pricing</Link>
                    <Link className="nav-link" to="/membership">Contact Us</Link>
                </Nav>
            </Navbar.Collapse>
            {/* </div> */}
        </Navbar>
    );
};

export default Header;