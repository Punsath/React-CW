import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import one from './assets/apartments/cinemonlifetower 2/405770887.jpg';
import two from './assets/apartments/cinemonlifetower 2/430541380.jpg';
import three from './assets/apartments/cinemonlifetower 2/430541107.jpg';
import four from './assets/apartments/cinemonlifetower 2/21961690199385xnObe6H4OaFsX08.jpeg';
import five from './assets/apartments/cinemonlifetower 2/cinnamon-life-suits-tower-2-bedroom-sea-view-apartment-rent-lease-sri-lanka-sl-colombo-realtors-lk-93-1-592x444.jpg';
import six from './assets/apartments/cinemonlifetower 2/colombo-photo-3.jpg';
import nine from './assets/Flow Plans/3a15965c982b3231303d617d7e81ca86.jpg';

const Apartment1 = () => {
  const [key, setKey] = useState('details');

  return (
    <>
       <div><br />
        <h4 className='text-center text-success my-5'>Cinnamon Life Residence</h4>
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
    </div><br />

      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 justify-content-center">

        <Tab eventKey="details" title={<span className="text-success fw-bold">Apartment Details</span>}>
          <section className="py-5 text-center container">
          <div className="row py-lg-1">
        <div className="col-lg-10 col-md-8 mx-auto">
          <p className="lead text-body-secondary">Bedrooms: 2 / Bathrooms: 2 / Parking: 1 / Area: 1250 sqft</p>
          <h6>This two-bed apartment is on at The Residence Tower within the Cinnamon Life Integrated Resort with panoramic sea and Beira Lake views.
            The luxury apartment is with a unique customized design inclusive of an open kitchen, breakfast counter and is exquisitely furnished and comes with 
          all modern electrical appliances. The apartment also has a dedicated parking bay.Facili es include roo op entertainment and BBQ space, 
          swimming pool, large well-equipped gym, sauna, and steam rooms etc. The building has back up water and power genera on.The adjacent Cinnamon
           Life Integrated Resort includes an 800 room Cinnamon hotel, large retail mall, office complex and is within walking distance to the World 
           Bank/IFC offices, US embassy etc. The Residence Tower is the only tower with direct access to the Cinnamon Life Mall.</h6>
           <br />
           <h5 className='text text-success'>Key Features</h5>

           <h6>
           • Two Bedroom and Two Bathroom unit with balcony <br />
            • Fully furnished inclusive of King Size Beds, sheer and blackout curtains and six seater dining table <br />
            • Floor Area – 1,259 sq. Ft (117 sq.m.) <br />
            • Solid Timber Flooring <br />
            • Double glazed windows <br />
            • En re unit fully Aircondi oned <br />
            • Open Kitchen with breakfast counter <br />
            • Ceiling Fans in Bedrooms <br />
            • Brand new appliances- Fridge/freezer, Gas 4 burner Hob, Electric Oven, Dishwasher,Washer/Dryer, Microwave, and LG 65” Smart TV <br />
            • SLT Fibre connec on with Peo TV cable <br />
           </h6>
            <br />
           <h4 className='text text-danger'><i>Rent is 1800$ Per month</i></h4>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.804101582586!2d79.8457388!3d6.9262906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259a193fd588b%3A0xc90ccf1d32e56965!2sThe%20Residence%20at%20Cinnamon%20Life!5e0!3m2!1sen!2sus!4v1641321942443!5m2!1sen!2sus"
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

export default Apartment1;
