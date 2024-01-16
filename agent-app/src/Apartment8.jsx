import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import one from './assets/apartments/geogary/Screenshot (305).png';
import two from './assets/apartments/geogary/Screenshot (307).png';
import three from './assets/apartments/geogary/Screenshot (308).png';
import four from './assets/apartments/geogary/Screenshot (310).png';
import five from './assets/apartments/geogary/Screenshot (311).png';
import six from './assets/apartments/geogary/Screenshot (309).png';
import nine from './assets/Flow Plans/c628fccc2a1709654ec172c47d7cc279.jpg';

const Apartment8 = () => {
  const [key, setKey] = useState('details');

  return (
    <>
      <div><br/>
        <h4 className='text-center text-success my-5'>Sense Apartments</h4>
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
          <p className="lead text-body-secondary">Bedrooms: 2 / Bathrooms: 2 / Parking: 1 / Area: 1310 sqft</p>
          <h6>This two-bed apartment is at the exclusive 7th Sense Apartments on R.G. Senanayake Mawatha (Gregory’s Road) in Colombo 7.The luxury 
            apartment is exquisitely furnished and comes with all modern electrical appliances. The apartment also has a dedicated parking bay.
          Facilities include roof top entertainment and BBQ space, swimming pool, well-equipped gym, sauna, and steam rooms etc. The building has
           back up water and power genera on.Within walking distance to the British High Commission, Japanese Embassy, Australian High Commission, 
           and the Colombo International School (CIS) etc.
        </h6><br />
           <h5 className='text text-success'>Key Features</h5>
           <h6>
           • Two Bedroom and Two Bathroom unit with two balconies <br />
            • Fully furnished inclusive of King Size beds, blackout roller blinds and extendable six seater dining table <br />
            • Floor Area - 1,259 sq. Ft (117 sq.m.) <br />
            • Timber Flooring <br /> 
            • Double glazed windows <br />
            • En re unit fully Aircondi oned • Kitchen with breakfast counter <br />
            • Ceiling Fans in Living Room and Bedrooms <br />
            • Appliances- Double Door Fridge/freezer, Four burner gas Hob, Electric Oven, <br />
            Dishwasher, Washer/Dryer, Microwave, and Sony 50” Smart TV <br />
            • Peo TV cable connec on <br />
            • Access controlled secure apartment <br />
           </h6>
           <br />
           <h4 className='text text-danger'><i>Rent is 1850$ Per month</i></h4>
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
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.804101582586!2d79.8666721!3d6.9089194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979fdfbc433%3A0x8b8cd57b466d48dc!2s7th%20Sense%20Apartments!5e0!3m2!1sen!2sus!4v1641321942443!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: '0', left: '0', border: '0' }}
                    loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </section>
        </Tab>

      </Tabs>
    </>
  );
}

export default Apartment8;
