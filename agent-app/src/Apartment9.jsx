import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import one from './assets/apartments/luna/Screenshot (317).png';
import two from './assets/apartments/luna/Screenshot (316).png';
import three from './assets/apartments/luna/Screenshot (315).png';
import four from './assets/apartments/luna/Screenshot (314).png';
import five from './assets/apartments/luna/Screenshot (313).png';
import six from './assets/apartments/luna/Screenshot (312).png';
import nine from './assets/Flow Plans/dfca47e3b0c5f0f331aa798b31fa0512.jpg';

const Apartment9 = () => {
  const [key, setKey] = useState('details');

  return (
    <>
      <div><br />
        <h4 className='text-center text-success my-5'>Luna Tower Apartment</h4>
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
          <p className="lead text-body-secondary">Bedrooms: 3 / Bathrooms: 3 / Parking: 1 / Area: 1700 sqft</p>
          <h6>This exquisite two-bedroom apartment situated in the prestigious 7th Sense Apartments at R.G. Senanayake Mawatha (Gregory’s Road),
             Colombo 7, offers luxury living at its finest. Fully furnished with modern appliances, this residence includes a dedicated parking bay 
             and grants access to rooftop entertainment spaces, a swimming pool, gym, sauna, and steam rooms.Conveniently located near the British 
             High Commission, Japanese Embassy, Australian High Commission, and Colombo International School (CIS), this apartment promises both 
             convenience and exclusivity.Additional amenities encompass an elevator, serene garden, stunning sea views, air conditioning, hot water,
              garage, home security, servant's quarters, high-speed internet, water tank, ensuite rooms, cable/DTH TV, landline phone, and 24-hour 
              security, all within a charming colonial-style setting. This property embodies refined urban living in central Colombo.</h6>
           <br />
           <h5 className='text text-success'>Key Features</h5>
           <h6>
           • Elevator <br />
            • Mainline Water<br />
            • Floor Area - 1,259 sq. Ft (117 sq.m.) <br />
            • Timber Flooring <br />
            • Double glazed windows <br />
            • En re unit fully Aircondi oned <br />
            • Kitchen with breakfast counter <br />
            • Ceiling Fans in Living Room and Bedrooms <br />
            • Cable / DTH TV <br />
            • Aircondition <br />
            • 24 Hours Security <br />
           </h6>
            <br />
           <h4 className='text text-danger'><i>Rent is 1650$ Per month</i></h4>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.198174362852!2d79.8593131!3d6.9185564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d3f766807%3A0xa327ee97ed70ebeb!2s447%20Luna%20Tower!5e0!3m2!1sen!2sus!4v1641321942443!5m2!1sen!2sus"
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

export default Apartment9;
