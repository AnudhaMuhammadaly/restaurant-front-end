import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Row , Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';


function ViewRest() {

  //useParams - used to get path parameter from the url

    // const paraId=useParams()
    // console.log(paraId.id);//obj=> id=3


   const[RestDetails,setRestDetails]=useState({})



    //destructure
    const {id}=useParams()
    console.log(id);//obj=> id=3

    //API call to get details of particular restaurant using path parameter

    const base_url='https://restaurant-back-end-6aym.onrender.com/restaurants'

    const fetchRest=async()=>{
      // 'http://localhost:3001/restaurants/5'
      const result=await axios.get(`${base_url}/${id}`)
      console.log(result.data);
      setRestDetails(result.data)
    }

    console.log(RestDetails);

useEffect(()=>{
fetchRest()
},[])

  return (
    <div style={{margin:'30px'}}>
    <Row>
     <Col> 
         <img src={RestDetails.photograph} alt="" style={{width:'450px',height:'500px'}} />
    </Col >

    <Col>
    <div className='container my-5 p-5' >
    <ListGroup>
      <h3 className='text-center'>{RestDetails.name}</h3>
      
      <ListGroup.Item>Address:{RestDetails.address}</ListGroup.Item>
      <ListGroup.Item>Neighborhood:{RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine type:{RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><RestOp op={RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview rev={RestDetails.reviews}/></ListGroup.Item>
    </ListGroup>
    </div>
     </Col >

    </Row>


    </div>
  )
}

export default ViewRest