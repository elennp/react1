import React from 'react'
import '../city/city.css';
import Australia from '../city/Autralia4.jpg';
import Citys from './Citys';

const City = () => {
  return (
    <div>
      <Citys/>
      <div id="container">

        <div className="product-details">
         <div> <h1>SIDNEY</h1> </div>
          <div>
          <p className="information">" From the golden sands and sparkling waters of Bondi Beach to the distinctive curves of the Sydney Opera House.. "</p>
          </div>
          <div className="control">
            <button className="btn">
              <span className="price">Like</span>
              <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
              <span className="buy">Buy Now</span>
            </button>
          </div>
        </div>

        <div className="product-image">
          <img src={Australia} alt="Omar Dsoky" />
          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li><strong>Languaje: </strong>English</li>
              <li><strong>Country: </strong>Australia</li>
              <li><strong>Coin: </strong>Dollar</li>
              <li><strong>Climate: </strong>Tropical</li>
              <li><strong>Transport: </strong>Air Land and River</li>
              <li><strong>Best station: </strong>Summer</li>
            </ul>
          </div>
          
        </div>



      </div>






    </div>







  );
}

export default City

