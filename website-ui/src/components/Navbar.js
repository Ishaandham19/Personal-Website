import { Navbar, Nav } from 'react-bootstrap';


export default function NavbarComp() {
    return (
        <Navbar id="navbar" fixed="top" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <div id="navbar-items">
                <Nav id="navbar-links" className="justify-content-center">
                    <Nav.Link id="navbar-link" href="#home">Home</Nav.Link>
                    <Nav.Link id="navbar-link" href="#skills">Skills</Nav.Link>
                    <Nav.Link id="navbar-link" href="#educationPage">Education</Nav.Link>
                    <Nav.Link id="navbar-link" href="#projects">Projects</Nav.Link>
                    {/* <Nav.Link id="navbar-link" href="#contact">Contact</Nav.Link> */}
                    {/* <Nav.Link id="navbar-link" href="#">Resume</Nav.Link> */}
                </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
