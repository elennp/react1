import React from 'react';

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

 function Items() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement  img src= {require('../../Saved Pictures/Antartica5.jpg')}  alt='...' />
          <MDBCarouselCaption>
            <h3>Antartic Savage</h3>
            <p className='elemenType'>Antarctica, the seventh continent, is one of the purest places on our wonderful planet, 
            you have to visit it with the awareness of the fragility and delicacy of this ecosystem. </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement img src= {require("../../Saved Pictures/Africa3.jpg")} alt='...' />
          <MDBCarouselCaption>
            <h3>Egypt</h3>
            <p>Land of contrasts composed of beautiful desert landscapes endowed with the splendor that gives them the inexhaustible Nile River, 
              Egypt attracts millions of visitors offering them a trip to the past thanks to its majestic temples and wonders of antiquity preserved
               to perfection </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement img src= {require("../../Saved Pictures/America7.jpg")} alt='...' />
          <MDBCarouselCaption>
            <h3>Canaima</h3>
            <p>World heritage site, beautiful park of millenary tepuis and mighty waters, which invite you to rest and the beautiful
               view of the virge natureworld heritage site, beautiful park of millenary tepuis and mighty waters, which invite you to 
               rest and the beautiful view of unspoiled nature.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default Items;
