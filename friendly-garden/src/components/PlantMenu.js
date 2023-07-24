import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

export default function PlantMenu() {
    const plantOptionsArray = ["Empty", "Tomatoes", "Basil", "Carrots", "Lettuce", 
    "Cucumbers", "Sunflowers", "Mint", "Rosemary", "Chives", "Beans", 
    "Peas", "Radishes", "Onions", "Garlic", "Cabbage", "Broccoli", 
    "Potatoes", "Marigolds", "Rue", "Dill", "Parsley", "Thyme", 
    "Chamomile", "Parsnips", "Strawberries", "Beets", "Celery", 
    "Chard", "Cauliflower", "Eggplant", "Summer savory", 
    "Hyssop", "Horseradish", "Melons", "Sweet potatoes"]

    return (
        <div style={{backgroundColor: '#A9FFF7', height: '100vh', width: '27%', float: 'left', overflowY: 'auto'}}>
            <header style={{fontWeight: 'bolder', fontSize: '25px', textAlign: 'center'}}>
                <span>
                    Plant Menu
                </span>
                <br />
                {/* <h6>
                Drag and Drop from the available options:
                </h6> */}
            </header>

            <Container style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 35 }).map((_, idx) => (
                        <Col key={idx}>
                        {
                            (idx % 2 === 0) && 
                            <Card bg="success" style={{borderRadius: '10px 100px / 120px'}}>
                                <Card.Body>
                                <Card.Title style={{textAlign: 'center', paddingTop: '4px'}} className="mb-2 text-white">{plantOptionsArray[idx+1]}</Card.Title>
                                </Card.Body>
                            </Card>
                        }
                        {
                            (idx % 2 !== 0) && 
                            <Card bg="success" style={{borderRadius: '100px 10px / 120px'}}>
                                <Card.Body>
                                <Card.Title style={{textAlign: 'center', paddingTop: '4px'}} className="mb-2 text-white">{plantOptionsArray[idx+1]}</Card.Title>
                                </Card.Body>
                            </Card>
                        }
                        </Col>
                    ))}
                </Row>
            </Container>

            <h6 style={{textAlign: 'center'}}>
                Missing your favorite plant? <br/>
                Contact me with any suggestions! :-)
            </h6>

        </div>
    )
}   