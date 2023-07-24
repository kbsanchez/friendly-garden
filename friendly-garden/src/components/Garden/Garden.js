import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../Footer';
import slogan from './slogan.png'

const Garden = () => {
  const [matrix, setMatrix] = useState([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [outputMatrix, setOutputMatrix] = useState([]);
  const [gardenBedSizeSelected, setGardenBedSizeSelected] = useState(false);
  const [testCompatibilitySelected, setTestCompatibilitySelected] = useState(false);

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

  // const handleRowSizeValidation = (r) => {
  //   if (r > 10 || r < 1) {
  //     console.log('no')
  //   } else {
  //     setRows()
  //   }
  // };

  const handleColSizeValidation = () => {
    
  };

  const handleMatrixSizeChange = () => {
    const newMatrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
    setMatrix(newMatrix);
    setGardenBedSizeSelected(true);
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = value;
    setMatrix(updatedMatrix);
  };

  const handleReset = () => {
    setGardenBedSizeSelected(false);
    setMatrix([]);
  };

  const handleOutputMatrixGeneration = () => {
    setOutputMatrix(matrix);
  };

  return (
    <div style={{backgroundColor: '#9E643C', height: '100vh', width: '73%', float: 'left', overflowY: 'auto'}}>
      <Container>
        <h1 style={{textAlign: 'center', display: 'inline-flex', width: '80%', margin: '0 auto'}}>
          <img style={{margin: '0 auto'}} src={slogan} alt='Are We Friends?'/> 
          <p style={{marginTop: '50px', marginLeft: '-22%', color: 'white', fontWeight: 'bolder'}}>Garden</p>
        </h1>
        {(gardenBedSizeSelected === false) && 
        <div style={{margin: 'auto', width: '50%'}}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="rows" style={{width: '30vh'}}>
                <Form.Label>Rows</Form.Label>
                <Form.Control 
                  style={{width: '30vh'}}
                  type="number"
                  value={rows}
                  min='1'
                  max='10'
                  isInvalid={(rows < 1) || (rows > 10)}
                  onChange={(e) => setRows(parseInt(e.target.value))}
                />
                <Form.Control.Feedback type="invalid" style={{color: 'white', paddingLeft: '4px'}}>
                  Choose a number between 1-10.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="cols" style={{width: '30vh'}}>
                <Form.Label>Columns</Form.Label>
                <Form.Control 
                  style={{width: '30vh'}}
                  type="number"
                  value={cols}
                  min='1'
                  max='10'
                  isInvalid={(cols < 1) || (cols > 10)}
                  onChange={(e) => setCols(parseInt(e.target.value))}
                />
                <Form.Control.Feedback type="invalid" style={{color: 'white', paddingLeft: '4px'}}>
                  Choose a number between 1-10.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div style={{textAlign: 'center'}}>
              <Button variant="secondary" onClick={handleMatrixSizeChange}>
                Generate Garden Bed
              </Button>
            </div>
          </Form>
        </div>
        }

        {
          (gardenBedSizeSelected === true) && (testCompatibilitySelected === false) &&
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
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '50px'}}>
              <Button style={{marginTop: '15px', marginInline: '10px', background: '#880808', borderColor: '#7B1818'}} onClick={handleReset}>
                  Reset
                </Button>
                <Button classname="test-compatibility-button" style={{marginTop: '15px', marginRight: '10px', background: '#50C878', borderColor: '#00A36C'}} onClick={handleOutputMatrixGeneration}>
                  Test Compatibility
                </Button>
              </div>
            </Form>
          </div>
        }
      </Container>

      <Footer/>
    </div>
  );
};

export default Garden;
