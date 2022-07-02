import React from 'react';
import {Link} from "react-router-dom";
import { Navbar,Nav,Container } from 'react-bootstrap';

function Navbarfun (){
  return (
     

      <Navbar bg="primary" id = "nav" variant="dark">
    <Container>
    <Navbar.Brand href="/">
    <img src ="https://cse.final-year-projects.in/wp-content/uploads/2016/11/pg-00077-online-cinema-tick.jpg" height='60px'  width='200px'/>
    </Navbar.Brand>
    <Nav className="ml-auto">
     <button style={{margin: "1rem"}} className = "navbut"><Link to="/">HOME</Link></button>
      <button style={{margin: "1rem"}} className = "navbut" ><Link to="tamil">TAMIL</Link></button>
      <button style={{margin: "1rem"}} className = "navbut" ><Link to="kannada">KANNADA</Link></button>
      <button style={{margin: "1rem"}} className = "navbut" ><Link to="/tikit/:id">SEAT BOOKING</Link></button>
       
    </Nav>
    </Container>
  </Navbar>  
  )
}
export default Navbarfun;