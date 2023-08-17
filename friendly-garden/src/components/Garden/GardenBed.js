import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../Footer';
import slogan from '../../assets/slogan.png'
import Pot from './Pot'
import './Garden.css'

const Garden = () => {
  const [matrix, setMatrix] = useState([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [currentPotColor, setCurrentPotColor] = useState('grey');
  const [outputMatrix, setOutputMatrix] = useState([]);
  const [gardenBedSizeSelected, setGardenBedSizeSelected] = useState(false);
  const [testCompatibilitySelected, setTestCompatibilitySelected] = useState(false);
  const [sizeValidated, setSizeValid] = useState(false);

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
    if(!sizeValidated){
      const newMatrix = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0)
      );
      setMatrix(newMatrix);
      setGardenBedSizeSelected(true);
    }
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrix];
    setCurrentPotColor('purple');
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
    <div className='garden-parent'>
      <Container className='garden-container'>
        <h1 className='garden-webtitle'>
          <img className='garden-webtitle-image' src={slogan} alt='Are We Friends?'/> 
          <p className='garden-webtitle-text'>Garden</p>
        </h1>
        {(gardenBedSizeSelected === false) && 
        <div className='garden-matrix-genform'>
          <Form noValidate validated={sizeValidated}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="rows" style={{width: '30vh'}}>
                <Form.Label>Rows</Form.Label>
                <Form.Control 
                  style={{width: '30vh'}}
                  type="number"
                  value={rows}
                  min='1'
                  max='5'
                  isInvalid={(rows < 1) || (rows > 5)}
                  onChange={(e) => setRows(parseInt(e.target.value))}
                />
                <Form.Control.Feedback type="invalid" style={{color: 'white', paddingLeft: '4px'}}>
                  Choose a number between 1-5.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="cols" style={{width: '30vh'}}>
                <Form.Label>Columns</Form.Label>
                <Form.Control 
                  style={{width: '30vh'}}
                  type="number"
                  value={cols}
                  min='1'
                  max='5'
                  isInvalid={(cols < 1) || (cols > 5)}
                  onChange={(e) => setCols(parseInt(e.target.value))}
                />
                <Form.Control.Feedback type="invalid" style={{color: 'white', paddingLeft: '4px'}}>
                  Choose a number between 1-5.
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
          <div className="matrix-container">
            <Form>
              <div className='garden-bed'>
                {matrix.map((row, rowIndex) => (
                  
                    <Row key={rowIndex}>
                      {row.map((cell, colIndex) => (
                        <Col key={colIndex}>
                            <div className='matrix-cell'>
                            <Pot potColor={currentPotColor}/>
                                <Form.Select style={{zIndex: '10', marginTop: '45px', marginBottom: '45px', width: '115px', marginRight: '8px'}}>
                                    type="text"
                                    value={cell}
                                    {options}
                                    onChange={(e) =>
                                    handleCellChange(rowIndex, colIndex, e.target.value)
                                    }
                                </Form.Select>
                            </div>
                          
                            
                        </Col>
                      ))}
                    </Row>
                  
                ))}
              </div>
              <div className='matrix-button-options'>
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
