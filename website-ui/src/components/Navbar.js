import React, {useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default function NavbarComp() {
    return (
        <Navbar id="navbar" fixed="top" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <div id="navbar-items">
                <Nav id="navbar-links" className="justify-content-center">
                    <Nav.Link className="navbar-link" href="#">Home</Nav.Link>
                    <Nav.Link className="navbar-link" href="#">Skills</Nav.Link>
                    <Nav.Link className="navbar-link" href="#">Education</Nav.Link>
                    <Nav.Link className="navbar-link" href="#">Projects</Nav.Link>
                    <Nav.Link className="navbar-link" href="#">Contact</Nav.Link>
                    <Nav.Link className="navbar-link" href="#">Resume</Nav.Link>
                </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
