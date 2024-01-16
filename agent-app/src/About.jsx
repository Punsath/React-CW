import React from 'react';
import firstImage from './assets/images/white-minimalist-house-interior-elegant-and-luxurious-futuristic-ai-generative-free-photo.jpg';

const About = () => {
  return (
    <><br /><br />
    <section className="py-5 text-center container"  style={{backgroundImage: `url(${firstImage})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
      <div className="row py-lg-1"> 
        <div className="col-lg-10 col-md-8 mx-auto">
          <h1 className="fw-light">About Us</h1><br />
          <p className="lead  fw-bold">
          At Prime Properties, our passion is making your dream of finding the perfect home a reality. With an unwavering commitment to excellence,
           we specialize in facilitating seamless transactions for buying, selling, and renting premium properties. Our dedicated team of seasoned 
           real estate experts possesses in-depth market knowledge and a personalized approach to meet your unique needs. Whether you're in search of 
           a charming family home or a lucrative investment opportunity, we're here to guide you through every step of the process. At Prime Properties
           , integrity, professionalism, and customer satisfaction are at the core of everything we do. Trust us to navigate the real estate landscape
            and match you with the ideal property that perfectly aligns with your lifestyle and aspirations. Welcome to Prime Properties, where your 
            dream home awaits.
          </p> <br /><br />
        </div>
      </div>
    </section><br />
</>
  );
};

export default About;
