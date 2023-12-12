import React from 'react';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Marquee from "react-fast-marquee";
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <h1>The Daily News</h1>
                <p className='text-secondary'>
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex'>
               <Button variant="danger">Latest</Button>
               <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Carrer</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                             <Button variant="secondary">Login</Button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;