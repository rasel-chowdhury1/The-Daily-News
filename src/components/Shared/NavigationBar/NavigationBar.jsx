import React, { useContext } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';


const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext)
    
    const handleLogout = () =>{
        logOut()
        .then(result =>{
            console.log("Successfully logout")
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                    <Link to='/'>Home</Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Carrer</Nav.Link>
            </Nav>
            <Nav>
                {user && <Nav.Link href="#deets">
                    <FaUserCircle style={{fontSize: '2rem'}}/>
                </Nav.Link>}

                    {user ? 
                      <Link onClick={handleLogout} to='/category/0'><Button variant="secondary">LogOut</Button></Link>
                      :<Link to='/login'><Button variant="secondary">LogIn</Button></Link>
                    }
                     
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    );
};

export default NavigationBar;