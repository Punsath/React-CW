import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstImage from './assets/images/dark-luxury-house-and-tall-glass-windows-cll7wwtf2mmy19zu.jpg';
import secondImage from './assets/images/WEB-2-Martis-Camp-Realty-Home-581-front-aerial.jpg';
import thirdImage from './assets/images/caribbean-3-story-luxury-house-71dkxxj7sgqm9d9p.jpg';
import fourthImage from './assets/images/430541380.jpg';
import six from './assets/images/9141981-9994184.jpg'
import seven from './assets/images/Screenshot (296).png'
import eight from './assets/images/Screenshot (286).png'
import one from './assets/apartments/geogary/Screenshot (305).png';
import ten from './assets/apartments/luna/Screenshot (317).png';
import { Carousel } from 'bootstrap';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const carouselRef = useRef(null);
  
  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current, {
        interval: 2000,
    
      });
    }
  }, []);

  let navigate = useNavigate();

  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstImage} className="d-block w-100 carousel-image" alt="First slide"  />
          </div>
          <div className="carousel-item">
            <img src={secondImage} className="d-block w-100 carousel-image" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={thirdImage} className="d-block w-100 carousel-image" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h3 className="text-center text-success my-5 ">New Listings</h3>
      <div className="d-flex justify-content-center"></div>

     <div className='container'>
      <div className="row">
        
        <div className="col-md-4 my-2">
        <div class="card" >
            <img src={fourthImage} class="card-img-top" height="250" width="15"/>
            <div class="card-body">
              <p class="card-text">Cinnamon Life Residence </p>
              <p class="card-text"><span style={{ color: 'grey' }}>Luxurious two-bed apartment with stunning views and open kitchen.</span></p>
              <p class="card-text">Type: House </p>
              <p class="card-text">Rooms: 2 </p>
              <p class="card-text">Price:<span style={{ color: 'red' }}> $1800</span> </p>
              <p class="card-text">Date: 2024/01/04 </p>
              <p class="card-text">Postal Code: 00200 </p>
              <a class="btn btn-success"  onClick={() => navigate('/apartment1')}>View</a>
            </div>
          </div>
          </div>

          <div className="col-md-4 my-2">
          <div class="card" >
            <img src={six} class="card-img-top" height="250" width="15"/>
            <div class="card-body">
              <p class="card-text"> 7th Sense Residencies</p>
              <p class="card-text"><span style={{ color: 'grey' }}>Exclusive 7th Sense Apartments in Colombo 7, luxury, amenities.</span></p>
              <p class="card-text">Type: House </p>
              <p class="card-text">Rooms: 2 </p>
              <p class="card-text">Price:<span style={{ color: 'red' }}> $1850</span> </p>
              <p class="card-text">Date: 2023/11/12 </p>
              <p class="card-text">Postal Code: 00100 </p>
              <a class="btn btn-success"  onClick={() => navigate('/apartment2')}>View</a>
            </div>
          </div>
          </div>

          <div className="col-md-4 my-2">
          <div class="card" >
            <img src={seven} class="card-img-top" height="250" width="15"/>
            <div class="card-body">
              <p class="card-text"> Iceland Residencies</p>
              <p class="card-text"><span style={{ color: 'grey' }}>Luxurious 3-bed apartment in Colombo 3, Iceland Residencies.</span></p>
              <p class="card-text">Type: House </p>
              <p class="card-text">Rooms: 3 </p>
              <p class="card-text">Price:<span style={{ color: 'red' }}> $2000</span> </p>
              <p class="card-text">Date: 2023/12/12 </p>
              <p class="card-text">Postal Code: 00300 </p>
              <a class="btn btn-success"  onClick={() => navigate('/apartment3')}>View</a>
            </div>
          </div>
          </div>

          <div className="col-md-4 my-3 ">
          <div class="card" >
            <img src={eight} class="card-img-top" height="250" width="15"/>
            <div class="card-body">
              <p class="card-text">Sky Gardens</p>
              <p class="card-text"><span style={{ color: 'grey' }}>Luxurious 3-bed apartment in Colombo 7, luxury amenities.</span></p>
              <p class="card-text">Type: House </p>
              <p class="card-text">Rooms: 3 </p>
              <p class="card-text">Price:<span style={{ color: 'red' }}> $2000</span> </p>
              <p class="card-text">Date: 2024/01/04 </p>
              <p class="card-text">Postal Code: 00400 </p>
              <a class="btn btn-success"  onClick={() => navigate('/apartment4')}>View</a>   
            </div>
          </div>
        </div>

        <div className="col-md-4 my-3 ">
          <div class="card" >
            <img src={ten} class="card-img-top" height="250" width="15"/>
            <div class="card-body">
              <p class="card-text">Luna Tower Apartment</p>
              <p class="card-text"><span style={{ color: 'grey' }}>Exquisite 2-bed at 7th Sense, Colombo 7, luxury amenities.</span></p>
              <p class="card-text">Type: Flat </p>
              <p class="card-text">Rooms: 3 </p>
              <p class="card-text">Price:<span style={{ color: 'red' }}> $1650</span> </p>
              <p class="card-text">Date: 2023/11/12 </p>
              <p class="card-text">Postal Code: 00900 </p>
              <a class="btn btn-success"  onClick={() => navigate('/apartment9')}>View</a>   
            </div>
          </div>
        </div>

        <div className="col-md-4 my-3 ">
          <div class="card" >
            <img src={one} class="card-img-top" height="250" width="15"/>
            <div class="card-body">
              <p class="card-text">Sense Apartments</p>
              <p class="card-text"><span style={{ color: 'grey' }}>Exclusive 2-bed at 7th Sense, Colombo 7, furnished, premium amenities.</span></p>
              <p class="card-text">Type: Flat </p>
              <p class="card-text">Rooms: 2 </p>
              <p class="card-text">Price:<span style={{ color: 'red' }}> $1850</span> </p>
              <p class="card-text">Date: 2023/11/12 </p>
              <p class="card-text">Postal Code: 00800 </p>
              <a class="btn btn-success"  onClick={() => navigate('/apartment8')}>View</a>   
            </div>
          </div>
        </div>

      </div>
     </div>
    </div>
  );
};

export default Home;
