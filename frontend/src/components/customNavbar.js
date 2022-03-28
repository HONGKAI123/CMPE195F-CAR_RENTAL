import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";

export default function CustomNavbar(){
    let history = useHistory();

    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="/home">Car Rental</Navbar.Brand>
                <Nav className="mx-0">
                    <Button 
                        onClick={()=> history.push('/login')}
                        type='button'
                        variant="secondary" 
                        className="mx-2">
                        Login
                    </Button>
                    <Button onClick={()=> history.push('/register')}
                        type='button'>
                        Register
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
    
}