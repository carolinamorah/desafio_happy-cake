import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
        
            <Navbar expand='lg' variant="light fixed-top">
                <Container >
                <Navbar.Brand><b className='logo justify-content-start rounded-4'>Happy Cake</b></Navbar.Brand>
                <Navbar.Toggle className='toggle' />
                <Navbar.Collapse className="justify-content-end mt-3">
                <Nav className="me-auto">
                    <Link to="/" className="nav-text ms-3 text-decoration-none">
                        Home 
                    </Link>
                    <Link to="/contacto" className="nav-text ms-3 text-decoration-none"> 
                        Contacto
                    </Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    
        </div>
    )
}

export default Navigation
