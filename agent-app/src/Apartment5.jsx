import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import one from './assets/images/Screenshot (283).png';
import two from './assets/apartments/capital elite/Screenshot (285).png';
import three from './assets/apartments/capital elite/Screenshot (284).png';
import four from './assets/apartments/capital elite/Screenshot (282).png';
import five from './assets/apartments/capital elite/Screenshot (281).png';
import six from './assets/apartments/capital elite/Screenshot (280).png';
import nine from './assets/Flow Plans/19529da48831f09c5e42ab4ada83de0d.jpg';

const Apartment5 = () => {
  const [key, setKey] = useState('details');

  return (
    <>
      <div><br />
        <h4 className='text-center text-success my-5'>Capitol Elite Apartments</h4>
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
          <p className="lead text-body-secondary">Bedrooms: 2 / Bathrooms: 2 / Parking: 1 / Area: 949 sqft</p>
          <h6>Discover the epitome of luxury living in this immaculate two-bedroom, two-bathroom apartment nestled within the prestigious 7th Sense
             Apartments along R.G. Senanayake Mawatha (Gregory’s Road) in Colombo 7. Spanning an impressive 1000 square feet, this lavishly furnished 
             apartment boasts a seamless fusion of elegance and modernity.Equipped with all contemporary electrical appliances, the apartment offers a 
             comfortable and convenient lifestyle. Its amenities include a dedicated parking bay and access to an array of facilities such as a rooftop
              entertainment area with a BBQ space, a refreshing swimming pool, a well-equipped gymnasium, along with indulgent sauna and steam rooms.
              The building ensures uninterrupted services with backup water and power generators, providing residents with peace of mind. Its prime 
              location within walking distance to the British High Commission, Japanese Embassy, Australian High Commission, and the renowned Colombo
               International School (CIS) presents unparalleled convenience.Moreover, this exquisite residence features a rooftop pool and gym,
                offering residents not only a luxurious living space but also a breathtaking panoramic view, making it the ultimate haven for those
                 seeking sophistication and comfort in the heart of Colombo.</h6>
           <br />
           <h5 className='text text-success'>Key Features</h5>
           <h6>
           • 2 Bedrooms<br />
            • Fully furnished inclusive of King Size beds, blackout roller blinds and extendable six seater dining table <br />
            • 2 Bathrooms(117 sq.m.) <br />
            • Timber Flooring <br />
            • 1000 sq ft <br />
            • En re unit fully Aircondi oned <br />
            • Kitchen with breakfast counter <br />
            • Ceiling Fans in Living Room and Bedrooms <br />
            • Roof top pool and gym <br />
            • Access controlled secure apartment <br />
           </h6>
            <br />
           <h4 className='text text-danger'><i>Rent is 1100$ Per month</i></h4>
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
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.548032044736!2d79.8678381!3d6.911715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259772394c2c7%3A0x1ac39e07de985407!2sCapitol%20Elite%20Apartments!5e0!3m2!1sen!2sus!4v1641321942443!5m2!1sen!2sus"
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

export default Apartment5;
