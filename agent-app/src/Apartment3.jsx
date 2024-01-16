import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import one from './assets/images/Screenshot (296).png';
import two from './assets/apartments/iceland/Screenshot (292).png';
import three from './assets/apartments/iceland/Screenshot (295).png';
import four from './assets/apartments/iceland/Screenshot (297).png';
import five from './assets/apartments/iceland/Screenshot (293).png';
import six from './assets/apartments/iceland/Screenshot (294).png';
import nine from './assets/Flow Plans/849eb9093dcb88178d5fcafac46277fe.jpg';

const Apartment3 = () => {
  const [key, setKey] = useState('details');

  return (
    <>
      <div><br />
        <h4 className='text-center text-success my-5'>Iceland Residencies</h4>
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
          <p className="lead text-body-secondary">Bedrooms: 3 / Bathrooms: 2 / Area: 1800 sqft</p>
          <h6>This luxurious three-bedroom apartment is nestled within the prestigious Symphony Towers located on Galle Road, Colombo 3. Boasting an
             opulent interior, this apartment is adorned with contemporary furnishings and equipped with state-of-the-art electronic appliances. Its 
             spacious layout offers a comfortable living experience alongside a dedicated parking space.Residents can indulge in a range of first-class 
             amenities, including a rooftop entertainment area with BBQ facilities, a sparkling swimming pool, a fully-equipped fitness center,
              rejuvenating sauna, and invigorating steam rooms. The building ensures uninterrupted utilities with backup water and power generators.
              Strategically situated within a short stroll from the United States Embassy, the Dutch Embassy, the World Trade Center, and elite 
              educational institutions like the Asian International School (AIS) and the Royal College, this apartment presents a lifestyle of 
              convenience and sophistication.</h6>
           <br />
           <h5 className='text text-success'>Key Features</h5>
           <h6>
           • Colombo 03 <br />
            • Iceland Residencies <br />
            • High Floor  <br />
            • Timber Flooring <br />
            • Double glazed windows <br />
            • En re unit fully Aircondi oned <br />
            • Kitchen with breakfast counter <br />
            • 1800 Sq.ft. <br />
            • Appliances- Double Door Fridge/freezer, Four burner gas Hob, Electric Oven,Dishwasher,<br /> Washer/Dryer, Microwave<br />
            • Access controlled secure apartment <br />
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.580830149779!2d79.845381!3d6.9200801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593f646ccd05%3A0x816ef63dea09ca0!2sIceland%20Residencies!5e0!3m2!1sen!2sus!4v1641321942443!5m2!1sen!2sus"
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

export default Apartment3;
