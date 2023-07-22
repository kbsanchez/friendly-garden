import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

export default function PlantMenu() {
    return (
        <div style={{backgroundColor: 'aqua', height: '100vh', width: '25%', float: 'left', overflowY: 'auto'}}>
            <header style={{}}>
                <span>
                    Plant Menu
                </span>
            </header>
            <span>
                add plants to garden bed
            </span>

            <Container style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 20 }).map((_, idx) => (
                        <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Placeholder text
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}   