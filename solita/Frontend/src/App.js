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
  const[{cities},dispatch]=useStateValue()
  async function test(){}
  
   useEffect(()=> {  
 
     axios.get("https://mytinerayelenn.herokuapp.com/api/datos")
   
 
   .then(response =>{ 
    dispatch({ type:actionType.CITIESDB,
      cities:response.data.response.cities})
     
    }) 
    if (localStorage.getItem("token")!==null){
      const token= localStorage.getItem("token")
      axios.get("https://mytinerayelenn.herokuapp.com/api/auth/signinToken",{
        headers:{
          "Authorization":"Bearer "+token
        }
      })
      .then(user=>{
        console.log(user)
      dispatch({
        type: actionType.USER,
        user: user.data.respuesta
      }) 
    })
    }   
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
   <Route path='/form' element={<Form/>} />
   <Route path='/formu' element={<Formu/>} />
  
   </Routes>
    <Footer/> 
   </BrowserRouter>

) ;

   }

export default App;

         