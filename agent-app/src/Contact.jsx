import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstImage from './assets/images/white-minimalist-house-interior-elegant-and-luxurious-futuristic-ai-generative-free-photo.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    selectedDate: null,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      selectedDate: date,
    });
  };

  const form = useRef(); //Emailjs

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s7l4syg', 'template_aircr5b', form.current, 'Z5P2V0bKg6snK9WdR')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setShowPopup(true); // Set showPopup to true after successful submission
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    
    <div className="container" style={{backgroundImage: `url(${firstImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="contact-container">
          <form ref={form} onSubmit={sendEmail}>
            <h4 className='headding'>Contact Us</h4>
            <p>Stay Updated with Prime Property's Exclusive Real Estate Newsletter!</p>
           
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required/>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="user_phoneNumber"
                  value={formData.user_phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required/>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="datepicker">Select Date:</label>
                <DatePicker
                  id="datepicker"
                  name="user_date"
                  selected={formData.selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Select a date"
                  dateFormat="MM/dd/yyyy"/>
              </div>
              <button className='conBut2' type="submit" value="Send">Submit</button>
            </form><br />
         
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <h3>Submitted successfully!</h3>
                  <p>Your form has been submitted.</p>
                  <button onClick={() => setShowPopup(false)} style={{ backgroundColor: 'green', color: 'white', border: 'none' }}>Close</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;