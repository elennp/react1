import React from 'react';
import { useStateValue } from '../../StateProvider';


import '../cities/cities.css';
import Brujas from '../cities/Brujas1.jpg';
import { Link as LinkRouter  } from "react-router-dom";


function Cities() {

 const [{cities},dispatch]=useStateValue()
 

  return (
    <div className='contenedor'>
     <div className="blog-card spring-fever">
       <img src= {Brujas} />
  <div className="title-content">
    <h3><a href="#">BRUGES IN BELGIUM</a></h3>
    <div className="intro"> <a href="#">Inspiration</a> </div>
  </div>
  <div className="card-info">
  When you imagine Belgium, you often think of Bruges. The canals wind through the city like a string of pearls, giving rise to its well-deserved nickname of "the Venice of the North".... 
    <LinkRouter to ="/city" className='ruta'>Read More<span class="licon icon-arr icon-black"></span></LinkRouter>
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


    </div>


  );
}

export default Cities

