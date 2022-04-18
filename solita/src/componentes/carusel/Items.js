import React from 'react'
import '../carusel/items.css';



import Ima from './Nyorka.jpg';
import Imag from './Vancouver.jpg';
import Image from './Venecia.jpg';
import Imagen from './Amsterd.jpg';
import Imgen from './Baires.jpg';
import Im from '../carusel/Estocolmo.jpg';
import Iman from '../carusel/Travel1.jpg';
import './items.css';




const Items = () => {
  return (

    <div >
      <div className='dale'></div>
      <div className='text'>
        <h1>MYTINERARY</h1>
        <h3>The travel blog that leads you to fulfill your dreams of traveling and discovering the best places in the world</h3>
        <div className='teim'></div>
        <h4>We were born with the dream of offering travelers all our experience and capacity in the area, providing a high quality service and adapting to today's demands.If your desire is to live wonderful moments, trust us and get ready to enjoy unforgettable trips.</h4>

      </div>

      <ul class="slides">
        <input type="radio" name="radio-btn" id="img-1" checked />
        <li class="slide-container">
          <div class="slide">
            <img src={Im} />
          </div>
          <div class="nav">
            <label for="img-6" class="prev">&#x2039;</label>
            <label for="img-2" class="next">&#x203a;</label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-2" />
        <li class="slide-container">
          <div class="slide">
            <img src={Ima} />
          </div>
          <div class="nav">
            <label for="img-1" class="prev">&#x2039;</label>
            <label for="img-3" class="next">&#x203a;</label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-3" />
        <li class="slide-container">
          <div class="slide">
            <img src={Imag} />
          </div>
          <div class="nav">
            <label for="img-2" class="prev">&#x2039;</label>
            <label for="img-4" class="next">&#x203a;</label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-4" />
        <li class="slide-container">
          <div class="slide">
            <img src={Image} />
          </div>
          <div class="nav">
            <label for="img-3" class="prev">&#x2039;</label>
            <label for="img-5" class="next">&#x203a;</label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-5" />
        <li class="slide-container">
          <div class="slide">
            <img src={Imagen} />
          </div>
          <div class="nav">
            <label for="img-4" class="prev">&#x2039;</label>
            <label for="img-6" class="next">&#x203a;</label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-6" />
        <li class="slide-container">
          <div class="slide">
            <img src={Imgen} />
          </div>
          <div class="nav">
            <label for="img-5" class="prev">&#x2039;</label>
            <label for="img-1" class="next">&#x203a;</label>
          </div>
        </li>

        <li class="nav-dots">
          <label for="img-1" class="nav-dot" id="img-dot-1"></label>
          <label for="img-2" class="nav-dot" id="img-dot-2"></label>
          <label for="img-3" class="nav-dot" id="img-dot-3"></label>
          <label for="img-4" class="nav-dot" id="img-dot-4"></label>
          <label for="img-5" class="nav-dot" id="img-dot-5"></label>
          <label for="img-6" class="nav-dot" id="img-dot-6"></label>
        </li>
      </ul>
    </div>



  );
}

export default Items

