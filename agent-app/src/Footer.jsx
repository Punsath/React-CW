import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
   
  return (
    <div class="container">
    <footer class="py-5"  >
      <div class="row">

        <div class="col-6 col-md-2 mb-3">
          <h5>Quick Links</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home</a></li>
            <li class="nav-item mb-2"><a href="/buy" class="nav-link p-0 text-muted">Properties</a></li>
            <li class="nav-item mb-2"><a href="/about" class="nav-link p-0 text-muted">About Us</a></li>
            <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-muted">Contact Us</a></li>
          </ul>
        </div>
  
        <div class="col-6 col-md-2 mb-3">
          <h5>Contact Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">prime@gmail.com</li>
            <li class="nav-item mb-2">+94752299123</li>
            <li class="nav-item mb-2">+94752459123</li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Address</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">137/A/Bambalapitiya/colombo07</li>
          </ul>
        </div>
  
        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <p>Stay Updated with Prime Property's Exclusive Real Estate Newsletter!</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
              <button class="btn btn-success" type="button">Mail</button>
            </div>
          </form>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2024 PrimePrperty (pvt). All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#"></use></svg></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#"></use></svg></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#"></use></svg></a></li>
        </ul>
      </div>
      
    </footer>
  </div>
  )
}

export default Footer
