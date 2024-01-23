import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jacem from './jacem.jpg';
const Cardd = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={jacem} />
      <Card.Body>
        <Card.Title> JACEM </Card.Title>
        <Card.Text>
          Bonsoir
        </Card.Text>
        <Button variant="primary"> CALL </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd
