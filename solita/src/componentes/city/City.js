import React, { useEffect, useState } from "react";
import '../city/city.css';
// import Comments from "../city/Comentarios.js";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../reducer";
import axios from "axios";


function City(props) {
  const itinerarios = props.itineraries
 
//   const [{ cities, user ,itineraries }, dispath] = useStateValue();
//   const [ reload,setReload]=useState(false)
//   const { id } = useParams();
//   const citySelecter = cities.filter((city) => city._id === id);
//   console.log(citySelecter);
//   const itiSelecter = itineraries.filter(
//     (iti) => iti.city === citySelecter[0].name
//   );


//   useEffect(() => {
//     console.log(citySelecter);
//     citySelecter.map((city) =>
//       axios
//         .get(`https://localhost:4000/api/itinerary/${city.name}`)
//         .then((response) =>
//           dispath({
//             type: actionType.ITINERARIESDB,
//             itineraries: response.data.response.itinerary,
//           })
//         )
//     );
//   }, [ reload]);

  

//   // likes

//   const likeDislike = async (event) => {
//     const token = localStorage.getItem("token");
// const id= event.target.id
// console.log(id)
// // 
//     await axios
//       .put(
//         `https://localhost:4000/api/likeDislike/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       )
//       .then((response) => console.log(response.data.response));

//       setReload(!reload)
  // };
  return (
    <>

      {itinerarios.map((iti) => (

        <div className="cardy" >
          <img src={iti.img} alt="" />
          <div className="card-body">
            <h4 className="card-title">{iti.city}</h4>
            <h6 className="card-title">{iti.name}</h6>
            <p className="card-text">{iti.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: {iti.price}</li>
            <li className="list-group-item">Time: {iti.time}</li>
            
          </ul>
          {/* <Comments itinerarios={iti._id}/> */}
          

          
        </div>











      ))
      }










    </>


  );
}

export default City

