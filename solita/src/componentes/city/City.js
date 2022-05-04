import React, { useEffect, useState } from "react";
import '../city/city.css';
import Comments from "../city/Comentarios.js";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../reducer";
import axios from "axios";
import Likes from "../Like";


function City(props) {
  const itinerarios = props.itineraries
 console.log(itinerarios)

  return (
    <>

      {itinerarios.map((itin) => (

        <div className="cardy" >
          <img src={itin.img} alt="" />
          <div className="card-body">
            <h4 className="card-title">{itin.city}</h4>
            <h6 className="card-title">{itin.name}</h6>
            <p className="card-text">{itin.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: {itin.price}</li>
            <li className="list-group-item">Time: {itin.time}</li>

          </ul>
          <div className="styleiLike">
                           <Likes likes={itin.likes} id={itin._id}/>
                        </div> 
          <div>
            <Comments itinerarios={itin._id} />
          </div>

        </div>

      ))
      }

    </>


  );
}

export default City

