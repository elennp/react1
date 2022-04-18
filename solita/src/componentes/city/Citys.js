import React from 'react'
import Mac from '../city/Mc.jpg';
import './citys.css';


const Citys = (props) => {
  const city = props.citySelecter
   console.log(city)
  return (
    <>
    {city?.map(item=>
    <div className='container1'>
      <div className='title'>
        <h1>{item.name}</h1>
      </div>
      <div className='imtop'>
      <img src={item.img} alt="" /></div>
      <div class='text'>
        <p> {item.description}</p>
    </div> 
    </div >
    )}
    </>
     );
}

export default Citys
