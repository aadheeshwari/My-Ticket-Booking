import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addmovie} from "../reducer/Slice";
import Carousal from "../Carousal";
import { useSelector } from 'react-redux';  
import { bindActionCreators } from 'redux';
import {Link} from "react-router-dom";
import { Container,Row,Col,Card,Button } from 'react-bootstrap';


const Kannada = ({data}) => {
  const [quantity,setQuantity]=useState(1);

  const Kannadamovies=useSelector(state=>state.counter.Kannadamovies)
  const ordermovie= useSelector((state) => state.counter.ordermovie)
const dispatch=useDispatch();
const add=(item)=>{
  item = JSON.parse(JSON.stringify(item));
  if(ordermovie.length == 0 ){
     dispatch(addmovie(item));
console.log(addmovie(item))
  }else{
    alert("you already selected movie still that's not booked check once")
  }
}



  return (

    <div id= 'tam'>
<Carousal/>
      
        <Container >
                <Row>
                <Col style={{columnCount:"3"}} id='card'>
        {
          Kannadamovies.map((ele, i) => {
            return <div  key={i} > 
         <Col >     
          <Card className='card' style={{background: "none"}}>
            <br/>
          <Card.Img id ='img1' src={ele.imageurl}  />
          <Card.Body>
          <Card.Title>  <p> {ele.name} </p></Card.Title>
            <Card.Text>
            <p> {`₹:- ${ele.price} /-`} </p></Card.Text>
             
            <Link  to={`/tikit/${ele.id}`}><button className='but' onClick={()=>add(ele)}> BOOK TICKET  </button></Link>

             
            </Card.Body>
            </Card>
         </Col>
          
           
            </div>
            
          })
          
        } </Col>
            </Row>
            </Container>
      <Button style={{margin: "3px"}} ><Link to='/'>GO BACK TO HOME</Link></Button>
      </div>

  )
}

export default Kannada