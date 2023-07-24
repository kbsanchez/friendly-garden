import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from './Footer';

const Garden = () => {
  const [matrix, setMatrix] = useState([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [outputMatrix, setOutputMatrix] = useState([]);

  const plantOptionsArray = ["Empty", "Tomatoes", "Basil", "Carrots", "Lettuce", 
  "Cucumbers", "Sunflowers", "Mint", "Rosemary", "Chives", "Beans", 
  "Peas", "Radishes", "Onions", "Garlic", "Cabbage", "Broccoli", 
  "Potatoes", "Marigolds", "Rue", "Dill", "Parsley", "Thyme", 
  "Chamomile", "Parsnips", "Strawberries", "Beets", "Celery", 
  "Chard", "Cauliflower", "Eggplant", "Summer savory", 
  "Hyssop", "Horseradish", "Melons", "Sweet potatoes"]

  const options = plantOptionsArray.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    )
  })

  const handleMatrixSizeChange = () => {
    const newMatrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
    setMatrix(newMatrix);
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = value;
    setMatrix(updatedMatrix);
  };

  const handleReset = () => {
    const resetMatrix = [...matrix];
    

    setMatrix(resetMatrix);
  };

  const handleOutputMatrixGeneration = () => {
    setOutputMatrix(matrix);
  };

  return (
    <div style={{backgroundColor: 'brown', height: '100vh', width: '73%', float: 'left'}}>
      <Container>
        <h1>Friendly Garden</h1>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="rows">
              <Form.Label>Rows</Form.Label>
              <Form.Control
                type="number"
                value={rows}
                onChange={(e) => setRows(parseInt(e.target.value))}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="cols">
              <Form.Label>Columns</Form.Label>
              <Form.Control
                type="number"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value))}
              />
            </Form.Group>
          </Row>
          <Button variant="secondary" onClick={handleMatrixSizeChange}>
            Generate Garden Bed
          </Button>
        </Form>

        <div className="matrix-container mt-3">
        <Form>
          <div>
            {matrix.map((row, rowIndex) => (
              
                <Row key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <Col key={colIndex} className="matrix-cell">
                      <Form.Select>
                        type="text"
                        value={cell}
                        {options}
                        onChange={(e) =>
                          handleCellChange(rowIndex, colIndex, e.target.value)
                        }
                      </Form.Select>
                    </Col>
                  ))}
                </Row>
              
            ))}
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button style={{marginTop: '15px', marginInline: '10px'}} variant="danger" onClick={handleReset}>
              Reset
            </Button>
            <Button style={{marginTop: '15px', marginRight: '10px'}} variant="info" onClick={handleOutputMatrixGeneration}>
              Test Compatibility
            </Button>
          </div>
        </Form>
        </div>
      </Container>

      <Footer/>
    </div>
  );
};

export default Garden;