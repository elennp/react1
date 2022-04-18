import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Citys from './Citys';
import City from './City';
import '../city/city.css';




function Linki() {
    
  const { id } = useParams()
  const [itineraries, setItineraries] = useState([])

  const [{ cities }, dispatch] = useStateValue()

  
   const citySelecter = cities.filter(city => city._id === id)


   useEffect(() => {
  //   // citySelecter.map(city =>
       axios.get(`http://localhost:4000/api/itinerary/${id}`)
       
         .then(response => setItineraries(response.data.response.itinerar)
         )

     
   }, [])



  
 return(
  <>
  
  <Citys citySelecter={citySelecter}/>
  <div className='card-itinerario'>
  <City itineraries={itineraries}/> 
  </div>
  </>   
 )   
}
export default Linki;