import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast';
import './Review.css'




function RestReview({rev}) {
    console.log(rev);//arry
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div><Button variant="primary" onClick={handleShow}>
    Reviews
  </Button>

  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Reviews Hub</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
   <div>
  {
    rev?.map(item=>(
    //     <ListGroup>
    //     <ListGroup.Item>{item.name}</ListGroup.Item>
    //     <ListGroup.Item>{item.date}</ListGroup.Item>
    //     <ListGroup.Item>{item.rating}</ListGroup.Item>
    //     <ListGroup.Item>{item.comments}</ListGroup.Item>
    //   </ListGroup>
    <Toast className='my-4'>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">{item.name}</strong>
      <small>{item.date}</small>
    </Toast.Header>
    <Toast.Body>
      <p> {item.comments}</p> 
      <hr />
      <p>Rating:{item.rating}</p>
        </Toast.Body>


  </Toast>
    ))
  }
   </div>
    </Offcanvas.Body>
  </Offcanvas></div>
  )
}

export default RestReview