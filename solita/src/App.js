import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './componentes/Navbar/Navbar';

import Home from './componentes/hom/Home'
import CitiesPadre from './componentes/citiesp/CitiesPadre';
import Form from './componentes/formularios/Form';
import Formu from './componentes/formularios/Formu';
import Footer from './componentes/footer/Footer'

import axios from 'axios';
import Linki from './componentes/city/Linki';



function App() {
 /* const data =[]*/
  const[cities,dispatch]=useStateValue()
  async function test(){}
  
   useEffect(()=> {  
 
     axios.get("http://localhost:4000/api/datos")
   
 
   .then(response =>{ 
    dispatch({ type:actionType.CITIESDB,
      cities:response.data.response.cities})
     
    })    
 },[])
 
 
 /* const itineraries =[]
 
 axios.get("http://localhost:4000/api/itinerary")
  .then(response =>{
  itineraries.push(...response.data.response.itineraries)
 
  },[])*/
   

return (
 
   <BrowserRouter>
   
   <Navbar/>
   <Routes>

   <Route path='/' element={<Home/>} />
   <Route path='/cities' element={<CitiesPadre/>} />
   <Route path='/city/:id' element={<Linki/>} />
   <Route path='/Form' element={<Form/>} />
   <Route path='/Formu' element={<Formu/>} />
  
   </Routes>
   <Footer/>
   </BrowserRouter>

) ;

   }

export default App;

         