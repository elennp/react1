import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import City from './componentes/city/City';
import axios from 'axios';




function App() {
const[cities,dispatch] = useStateValue()

async function test(){}

useEffect(()=> {
  axios.get('http://localhost:4000/api/datos')
  .then(...response=>
 dispatch({
   type:actionType.CITIESDB,
   cities:response.data.response.cities
 }))
});


const itinerary =[]
axios.get('http://localhost:4000/api/itinerary')
.then(response=>{
  itinerary.push(...response.data.response.itinerary)

},[])




return (

  
   <BrowserRouter>
   
   <Navbar/>
   <Routes>

   <Route path='/' element={<Home/>} />
   <Route path='/cities' element={<CitiesPadre/>} />
   <Route path='/city' element={<City/>} />
   <Route path='/form' element={<Form/>} />
   <Route path='/formu' element={<Formu/>} />
   
   

   </Routes>
   <Footer/>
   </BrowserRouter>

  









) ;







}
export default App

         