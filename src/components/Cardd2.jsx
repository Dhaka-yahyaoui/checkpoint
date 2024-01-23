import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tharouet from './tharouet.png';
const Cardd = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tharouet}/>
      <Card.Body>
        <Card.Title> THAROUAT </Card.Title>
        <Card.Text>
          :*
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd