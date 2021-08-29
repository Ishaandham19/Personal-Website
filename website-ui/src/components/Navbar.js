import { Navbar, Nav } from 'react-bootstrap';
import Resume from './Resume_Ishaan_Dham.pdf'

export default function NavbarComp() {
    //for smooth transition
    function scrollTo(id){
        document.querySelector(id).scrollIntoView({ 
        behavior: 'smooth' 
    })};

    return (
        <Navbar id="navbar" fixed="top" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <div id="navbar-items">
                <Nav id="navbar-links" className="justify-content-center">
                    <Nav.Link id="navbar-link" onClick = {() => scrollTo('#home')}>Home</Nav.Link>
                    <Nav.Link id="navbar-link" onClick = {() => scrollTo('#about')}>About</Nav.Link>
                    <Nav.Link id="navbar-link" onClick = {() => scrollTo('#education')}>Education</Nav.Link>
                    <Nav.Link id="navbar-link" onClick = {() => scrollTo('#projects')}>Projects</Nav.Link>
                    <Nav.Link id="navbar-link" onClick = {() => scrollTo('#contact')}>Contact</Nav.Link>
                    {/* <Nav.Link id="navbar-link" onClick = {() => scrollTo('#blog')}>Blog</Nav.Link> */}
                    <Nav.Link id="navbar-link" href={Resume} target="_blank">Resume</Nav.Link>
                </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
