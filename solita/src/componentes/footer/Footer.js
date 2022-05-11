import { borderRadius, height } from '@mui/system';
import React from 'react'
 import './footer.css';
import Logo from '../../Saved Pictures/logo.png';
import Buen from '../footer/buen.gif';





const Footer = () => {
    return (

        <>
           <footer>
<div class="row primary">
  <div class="column about">

  <h3>Mytinerary</h3>

   <p>
   Dreams don’t work unless you do
  </p>

 
</div>

<div class="column links">
<h2>travel happy</h2>

 <ul>

  <li>
   <a href="#faq">Home</a>
  </li>
  <li>
   <a href="#cookies-policy">Cities</a>
  </li>
  <li>
   <a href="#terms-of-services">Itineraries</a>
  </li>
  
 </ul>

</div>


<div class="column links">
  <h3>About</h3>
   <ul>
    <li>
     <a href="#faq">Caba Argentina</a>
    </li>
    <li>
     <a href="#cookies-policy">Phone 23229877</a>
    </li>
    <li>
    <a href="#terms-of-services">puenteselenn127@gmail.com</a>
    </li>
   
  </ul>
</div>

<div class="column subscribe">
 <h3>Mytineray Blog Travel</h3>
 <img src={Buen}/>

</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Contact</a>
  <a href="">Blog</a>
  

  </div>
   <p>Copyright &copy; 2021 Elenn Puentes Developer</p>
</div>
</footer>

        </>

    )
}

export default Footer

