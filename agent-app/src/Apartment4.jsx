import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import one from './assets/images/Screenshot (286).png';
import two from './assets/apartments/skygardens/Screenshot (287).png';
import three from './assets/apartments/skygardens/Screenshot (288).png';
import four from './assets/apartments/skygardens/Screenshot (289).png';
import five from './assets/apartments/skygardens/Screenshot (290).png';
import six from './assets/apartments/skygardens/Screenshot (291).png';
import nine from './assets/Flow Plans/00908cb891219a3a8a57948ddee12c50.jpg';

const Apartment4 = () => {
  const [key, setKey] = useState('details');

  return (
    <>
      <div><br/>
        <h4 className='text-center text-success my-5'>Sky Gardens</h4>
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
          <p className="lead text-body-secondary">Bedrooms: 3 / Bathrooms: 2 / Parking: 1 / Area: 1800 sqft</p>
          <h6>Located in the prestigious Vista Towers along Flower Road in Colombo 7, this sophisticated two-bedroom apartment offers an unparalleled 
            living experience. Elegantly furnished and equipped with cutting-edge electrical appliances, this luxury apartment promises a comfortable
             lifestyle.Featuring a designated parking space, residents will also enjoy an array of amenities including a rooftop entertainment area 
             with a BBQ space, an inviting swimming pool, a fully-equipped gymnasium, indulgent sauna, and relaxing steam rooms. The building ensures
              uninterrupted services with backup water and power supply.Strategically positioned within walking distance of prominent establishments 
              such as the British High Commission, Japanese Embassy, Australian High Commission, and the esteemed Colombo International School (CIS),
               this apartment offers both convenience and exclusivity in the heart of Colombo.</h6>
           <br />
           <h5 className='text text-success'>Key Features</h5>
           <h6>
           • Colombo 03 <br />
            • Iceland Residencies<br />
            • High Floor <br />
            • 1800 Sq.ft.<br />
            • 3 Rooms<br />
            • 2 Washrooms (1 attached & 1 common) <br />
            • Maids Room & Bathroom  <br />
            • Furnished <br />
            • Sea / City / Port City View  <br />
            • Gym & pool <br />
            • Two Parking Spaces  <br />
           </h6>
            <br />
           <h4 className='text text-danger'><i>Rent is 2,000$ (negotiable) Per month</i></h4>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.278211081132!2d79.9024313!3d6.9141726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ef1a59f8dd%3A0xc9ae56225d303bba!2sSky%20Gardens!5e0!3m2!1sen!2sus!4v1641321942443!5m2!1sen!2sus"
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

export default Apartment4;
