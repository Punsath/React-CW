import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import one from './assets/images/screenshot (275).png';
import two from './assets/apartments/havelock/Screenshot (274).png';
import three from './assets/apartments/havelock/Screenshot (276).png';
import four from './assets/apartments/havelock/Screenshot (277).png';
import five from './assets/apartments/havelock/Screenshot (278).png';
import six from './assets/apartments/havelock/Screenshot (279).png';
import nine from './assets/Flow Plans/670793c1d0d657992c00fc5d112705be.jpg';

const Apartment6 = () => {
  const [key, setKey] = useState('details');

  return (
    <>
      <div><br />
        <h4 className='text-center text-success my-5'>Havelock City Apartment</h4>
      </div>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={one} className="d-block w-100" height="600" width="15"/>
        </div>
        <div className="carousel-item">
          <img src={two} className="d-block w-100"  height="600" width="15"/>
        </div>
        <div className="carousel-item">
          <img src={three} className="d-block w-100" height="600" width="15"/>
        </div>
        <div className="carousel-item">
          <img src={four} className="d-block w-100"  height="600" width="15"/>
        </div>
        <div className="carousel-item">
          <img src={five} className="d-block w-100"  height="600" width="15"/>
        </div>
        <div className="carousel-item">
          <img src={six} className="d-block w-100"  height="600" width="15"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div><br /><br />
    
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 justify-content-center">

        <Tab eventKey="details" title={<span className="text-success fw-bold">Apartment Details</span>}>
          <section className="py-5 text-center container">
          <div className="row py-lg-1">
        <div className="col-lg-10 col-md-8 mx-auto">
          <p className="lead text-body-secondary">Bedrooms: 3 / Bathrooms: 2 / Area: 1300 sqft</p>
          <h6>Nestled in the esteemed Stratford Tower at Havelock City, Colombo 05, this furnished three-bedroom, two-bathroom apartment on a
             mid-higher floor spans 1300 square feet. Boasting serene garden views, this residence features a maid's room with an attached bathroom 
             for added convenience.Equipped with modern amenities like air conditioning, hot water, high-speed internet, and cable/DTH TV connections,
              this apartment ensures a comfortable lifestyle.Residents enjoy exclusive access to rooftop entertainment with BBQ areas, a swimming pool,
               gym, sauna, and steam rooms. The building offers backup water and power supply.Conveniently located near the British High Commission, Japanese Embassy, Australian High Commission, and Colombo International School (CIS), this property offers luxury living at USD $1600 (negotiable), identified by Property Code: A18837.</h6>
           <br />
           <h5 className='text text-success'>Key Features</h5>
           <h6>
           • Colombo 05 <br />
            • Havelock City <br />
            • Stratford Tower<br />
            • 3 Bedrooms<br />
            • 2 Bathrooms <br />
            • Maid's room / bathroom <br />
            • Mid-higher Floor <br />
            • 1300 Sq.ft <br />
            • Furnished <br />
            • Garden View <br />
            • Rent USD: $1600 (negotiable)<br />
           </h6>
            <br />
           <h4 className='text text-danger'><i>Rent is 1750$ Per month</i></h4>
        </div>
      </div>
          </section>
        </Tab>

        <Tab eventKey="features" title={<span className="text-success fw-bold">Flow Plan</span>}>
          <section className="py-5 text-center container">
            <div className="row py-lg-1">
              <div className="col-lg-10 col-md-8 mx-auto">
                <img src={nine} className="d-block w-100"  height="600" width="15"/>
              </div>
            </div>
          </section>
        </Tab>

        <Tab eventKey="map" title={<span className="text-success fw-bold">Map</span>}>
          <section className="py-5 text-center container">
            <div className="row py-lg-1">
              <div className="col-lg-10 col-md-8 mx-auto">
                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2950464524565!2d79.865372!3d6.8824129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bc8d809bf4d%3A0x7dbbe5735525b9a3!2sHavelock%20City!5e0!3m2!1sen!2sus!4v1641321942443!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: '0', left: '0', border: '0' }}
                    loading="lazy">
                    </iframe>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        
      </Tabs>
    </>
  );
}

export default Apartment6;
