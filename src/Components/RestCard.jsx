import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'

// child node so give the selector to parent:allrest
function RestCard({restaurants}) { // props: curlybrackt give
  console.log(restaurants); // each obj each rest details
  return (
    <div>
     <Link to = {`view/${restaurants.id}`} style={{textDecoration:'none'}}>

      <MDBCard style={{height:'500px', width:'320px',margin:'20px'}}>
    <MDBCardImage src={restaurants.photograph} height={'350px'} position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle>{restaurants.name}</MDBCardTitle>
      <MDBCardText>
       {restaurants.address}
      </MDBCardText>
     
    </MDBCardBody>
  </MDBCard>
  </Link>
  </div>
  )
}

export default RestCard