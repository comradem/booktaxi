import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';
import FormComponent from "../components/FormComponent";

function MainPage(props) {
    return (
        <Container fluid>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Navbar.Brand as={Link} to={
                    {
                        pathname: '/'
                    }
                }><img src='https://booktaxi.co.il/wp-content/uploads/2019/03/logo-150-50.png'
                       alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link href="#home">BOOK ONLINE</Nav.Link>
                        <Nav.Link href="#link">AIRPORT BEN GURION TAXI</Nav.Link>
                        <Nav.Link href="#link">TAXI FROM HAIFA</Nav.Link>
                        <Nav.Link href="#link">ALL DAY TRIP REQUEST</Nav.Link>
                        <Nav.Link href="#link">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <FormComponent/>
        </Container>
    );
}

export default MainPage;