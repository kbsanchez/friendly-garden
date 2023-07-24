import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <Navbar bg="none" data-bs-theme="dark" style={{position: 'fixed', bottom: '0'}}>
                <Container>
                <Navbar.Brand href="#howitworks">How It Works</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#resources">Companion Gardening Resources</Nav.Link>
                    <Nav.Link href="#portfolio" style={{position: 'fixed', right: '0'}}>keylinsanchez.com</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}
