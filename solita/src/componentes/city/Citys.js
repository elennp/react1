import React from 'react'
import Mac from '../city/Mc.jpg';
import './citys.css';


const Citys = () => {
  return (
    <div className='container1'>
      <div className='title'>
        <h1>ITINERARY</h1>
      </div>
      <img src={Mac} alt="Omar Dsoky" />
      <div class='text'>
        <p> The colorful rocks of Lake McDonald, Canada
        Glacier National Park, in the state of Montana, on the border with Canada,
        They are mountain lakes with crystal clear waters and low temperatures, 
        which invite us to delight in these beautiful landscapes. Green rocks
        can be seen in Lake Otokomi, while darker colored rocks are found at the 
        upper end of Lake McDonald and around Trout Lake, as a result of subjecting 
        the iron-rich red and green rocks to heat and Pressure. These rocks actually 
        abound throughout the Glacier National Park and leave some images as beautiful 
        as the ones we can offer in this post</p>
    </div> 
    </div >
     );
}

export default Citys
