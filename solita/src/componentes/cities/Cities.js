import React from 'react';
import { useStateValue } from '../../StateProvider';
import PropTypes from "prop-types";

import '../cities/Cities.css';
import Brujas from '../cities/Brujas1.jpg';
import { Link as LinkRouter } from "react-router-dom";


function Cities() {
  // console.log(props.cities);
  // const cities = props.cities;

  const[{cities},dispatch]=useStateValue()
  


  return (
     <>
     
      
        <div className='contenedor'>
        {  cities.map((data)=>(
          <div className="blog-card spring-fever">
            <img src={data.image} />
            <div className="title-content">
              <h3><a href="#">{data.name}</a></h3>
              <div className="intro"> <a href="#">{data.country}</a> </div>
               
            </div>
            <div className="card-info">
              {data.description}
              <LinkRouter to={`/city/${data._id}`} className='ruta'>Read More<span class="licon icon-arr icon-black"></span> </LinkRouter>
            </div>
            <div className="utility-info">
              <ul className="utility-list">
                <li><span className="licon icon-like"></span><a href="#">2</a></li>
                <li><span className="licon icon-com"></span><a href="#">12</a></li>

              </ul>
            </div>
            <div className="gradient-overlay"></div>
            <div className="color-overlay"></div>
          </div>
        
        ) )}  
        </div>
       
        
        </>     
    
  );
  
}

export default Cities

