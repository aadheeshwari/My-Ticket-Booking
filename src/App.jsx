import React, {useState} from "react"
import './App.css';
import Movies from './Movies';
import Navbarfun from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Tamil from './Component/Tamil';
import Kannada from './Component/Kannada';
import Final from './Component/Final';
import TikitBook from './Component/TikitBook';



function App() {
  return (
    <main>
      <Navbarfun/>
      
     
         
      <Routes>
      <Route path="/" element={<Movies/>} />
      <Route path="tamil" element={<Tamil/>} />
      <Route path="kannada" element={<Kannada/>} />
      <Route path="/final" element={<Final />} />
   <Route path="/tikit/:id" element={<TikitBook/>}/>
    
                
         
      
      </Routes>
      
    </main>
  );
}

export default App;