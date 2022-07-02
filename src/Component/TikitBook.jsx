import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Removemovie } from "../reducer/Slice";
import { useNavigate } from "react-router-dom";
import Carousal from "../Carousal";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Seat from '../Selectseat/Seat';

function TikitBook(){
  const ordermovie= useSelector((state) => state.counter.ordermovie);

 const order = () => {
    if (ordermovie.length == 1) {
      navigate("/final");
      alert('click ok to confirm booking')
       location.reload();
    } else if(ordermovie.length > 1){
        alert('You can able to book only single movie at a time')
    }else if(ordermovie.length == 0){
        alert('You must select atleast one movie')
    }
  };
  
  console.log(ordermovie);
   const navigate = useNavigate();
  const despatch = useDispatch();
  const Remove = (ele) => {
    despatch(Removemovie(ele));
  };
  var sum = 0;
 
  return (
    <div id = 'cart'>
      <Carousal/>
      <div>
      <h1> Your Favorite Flim</h1>
        {ordermovie.map((ele, i) => {
          return <div  key={i} style={{columnCount:"2"}} >
            <p> <img id="img2" src={ele.imageurl}/></p>
        <br/>
        <br/>
            <h1> {ele.name}</h1>
 <br/>
 <br/>
  <label> <h4>CHOOSE YOUR THEATER</h4></label>
            <br></br>
  <select id = 'select'>
            <option > INOX National: Arcot Road </option>
            <option > MAYAJAAL Multiplex: ECR, Chennai </option>
            <option > RAM MANDIR </option>
            <option > GOLD CINEMA </option>
            <option > REGAL CINEMA </option>
            <option > EROS CINEMA MUMBAI </option>
            <option > 7D VR Voyage : Garuda Mall </option>
            <option > Amruth Digital 2K A/C Cinema: Lingarajapuram </option>
  </select>                  
          <Seat/>

            
            <Button
                  onClick={() => Remove(ele)}
                >
                  cancel it
                </Button>
 <br/>
 <br/>
 <br/>
            <label> <h4>CHOOSE YOUR TIMING</h4></label>
            <br/>
 <select id = 'select'>
            <option >09:00AM - 12:00PM </option>
            <option >12:00PM - 03:00PM </option>
            <option >03:00PM - 06:00PM </option>
            <option >06:00PM - 09:00PM </option>
            <option >09:00PM - 12:00AM </option>
            <option >12:00AM - 03:00AM </option>
            <option >03:00AM - 06:00AM </option>
            <option >06:00AM - 09:00AM </option>
  </select>  
            
          </div>
})}
        




        
      </div>
 <br/>
 <br/>
 <br/>
      
       <Button style={{margin: "3px"}} ><Link to='/'>GO BACK TO HOME</Link></Button>
      <a>
       <Button  onClick={order}>
           CONFORM YOUR MOVIE TICKET
        </Button>
     </a>
    </div>    
  );
};

export default TikitBook;
