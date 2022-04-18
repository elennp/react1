
import '../city/city.css';
import Australia from '../city/Autralia4.jpg';


function City(props) {
  const itinerarios = props.itineraries
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
          
        </div>











      ))
      }










    </>


  );
}

export default City

