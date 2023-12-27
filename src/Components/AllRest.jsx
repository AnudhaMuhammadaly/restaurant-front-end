import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row , Col} from 'react-bootstrap'
import RestCard from './RestCard'

// rest details
// parent node
function AllRest() {
 
  const base_url='https://restaurant-back-end-6aym.onrender.com/restaurants'

  // to hold array of restaurant data
  const [AllRestData,setAllRestData]=useState([])

 // API fetching
  const fetchData=async()=>{
     const result = await axios.get(base_url)
     console.log(result.data); // array(10) give it to state then only give it to js
     setAllRestData(result.data)
 
    }
    console.log(AllRestData); // give this to html

 useEffect(()=>{
  fetchData()
 },[])


  return (
    <div>
     <Row>
         {
          AllRestData.map(item=>(  // small screen medm screeen
            <Col sm={12} md={6} lg={4} xl={3}>
            
           <RestCard restaurants={item}/>
            </Col>
          ))
         }

     </Row>




    </div>
  )
}

export default AllRest