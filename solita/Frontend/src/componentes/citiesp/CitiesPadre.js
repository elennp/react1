import React from 'react'
import Search from '../buscador/Search';

import Cities from '../cities/Cities';
import './citiespadre.css';

function CitiesPadre() {
     return (

          <>

              <div className='busca'>
               <div className='bus'>
                 <p>Don't leave for tomorrow the trip you can do today... select your itinerary</p>
                 </div>
                    <div className='bus1'>
                    <Search />
                    </div>
               </div>

               
                    <Cities />


               
          </>
     );

}
export default CitiesPadre;



