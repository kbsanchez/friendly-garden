import React, { useState } from 'react'
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap'

export default function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg='none' data-bs-theme="dark" style={{position: 'static', bottom: '0', minWidth: '100%', backgroundColor: '#1E0F04'}} >
                <Container style={{marginLeft: '0'}}>
                <Navbar.Brand onClick={handleShow}>How To Use</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="https://www.keylinsanchez.com/contact" target='blank' rel='noreferrer noopener'>Contact</Nav.Link>
                    <Nav.Link>More On Companion Gardening</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose} style={{height: '95vh', marginLeft: '15%', marginTop: '4%', textAlign: 'center'}} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>How To Use the 'Are We Friends?' Garden</Modal.Title>
                </Modal.Header>
                <Modal.Body>Select the number of rows and columns in your garden bed.
                    <br /> Add your plants into each garden box cell, in the order you wish to plant.
                    You may leave cells empty.
                    <br /> When you are satisfied with the composition of your garden bed, select 'Test Compatibility'
                    <br />
                    <br /> Your garden bed composition is analyzed with respect to its compatibility
                    of all neighboring plants. Once this process is complete, you are shown
                    a diagram of your garden bed, where each plant is colored to
                    denote how optimal its position is relative to its neighbors.
                    <br />
                    <br /> <b>Green:</b> Most optimal compatibility
                    <br /> <b>Yellow:</b> Neutral to plant here
                    <br /> <b>Red:</b> Not optimal to plant here
                    <br />
                    <br /> Print your diagram, or reset the garden bed and test another configuration!
                    <br />
                    <br /> <i>Note that companion planting recommendations can vary based on your specific region 
                    and growing conditions. Consider experimenting and observing your plants to find 
                    the best companion combinations for your garden. </i>
                    <br />
                    <br /> Happy planting!

                </Modal.Body>
            </Modal>
        </>
    )
}
