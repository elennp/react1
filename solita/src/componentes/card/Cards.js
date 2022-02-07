import React from "react";
import Card from "./Card";

import image1 from "../../Saved Pictures/Africa2.jpg";
import image2 from '../../Saved Pictures/Europa1.jpg'
import image3 from '../../Saved Pictures/America1.jpg'
import image4 from '../../Saved Pictures/Antartica5.jpg'
import image5 from '../../Saved Pictures/Asia1.jpg'
import image6 from '../../Saved Pictures/America7.jpg'

const cards = [
  {
    id: 1,
    title: "Africa",
    image: image1,
    url:"  https://www.africatourisminformation.com/",
    text: "Welcome to Africa,wild and charming waits for you, with the most beautiful plains and wild animals "
  },
  {
    id: 2,
    title: "Versalles",
    image: image2,
    url: "https://es.versailles-tourisme.com",
    text:"Are you in Versailles this weekend? Come and have a brunch in one of the historical areas of Versailles, before or after visiting the Palace..."
  },
  {
    id: 3,
    title: "Rio de Janeiro",
    image: image3,
    url: "http://visit.rio/wp-content/themes/rio/favicon.gif",
    text:"He applauds the sunset on the beach, he falls in love with music, with cinema. He chats at the bar, frequents the samba wheels and, mainly, practices the Carioca way of being unconditionally."
    
  
  },
  {
    id: 4,
    title: "Antarctica",
    image: image4,
    url: "http://www.viajesalaantartida.com/Informacion-General/Turismo-Antartico",
    text: "Do not wait any longer and make your reservations to go on a trip to Antarctica and live one of the most fantastic and amazing experiences of your life. There is a boat waiting to offer you the trip of your dreams through Antarctica."
  
  },
  {
    id: 5,
    title: "Burma",
    image: image5,
    url: "https://www.turistaloserastu.es/nuestros-destinos/myanmar-turismo-guia-de-viaje-mapa/",
    text:"Whether we refer to colonial Burma or Myanmar, we will be talking about the legendary kingdom of Pagan, the cradle of the current nation and a cultural landmark in Southeast Asia.",
  
  },
  {
    id: 6,
    title: "Canaima",
    image: image6,
    url: "https://delamazonas.com/lugares-turisticos-venezuela/parque-nacional-canaima/",
    text: "Natural Heritage of Humanity for its great scenic beauty and biodiversity,It stands out for its abrupt reliefs and tabular mountains with unique biogeological characteristics that receive the local name of tepuis.",
  },
];


function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-5" key={card.id} style={{margin:'30px'}}>
            <Card imageSource={card.image} title={card.title} url={card.url} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;