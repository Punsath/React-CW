import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Buy from "./Buy";
import Contact from './Contact';

import Apartment1 from './Apartment1';
import Apartment2 from './Apartment2';
import Apartment3 from './Apartment3';
import Apartment4 from './Apartment4';
import Apartment5 from './Apartment5';
import Apartment6 from './Apartment6';
import Apartment7 from './Apartment7';
import Apartment8 from './Apartment8';
import Apartment9 from './Apartment9';


function App() {
  const [setResults] = useState([]); 

  return (
    <Router>
     <Navbar setResults={setResults} />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/apartment1" element={<Apartment1 />} />
        <Route path="/apartment2" element={<Apartment2 />} />
        <Route path="/apartment3" element={<Apartment3 />} />
        <Route path="/apartment4" element={<Apartment4 />} />
        <Route path="/apartment5" element={<Apartment5 />} />
        <Route path="/apartment6" element={<Apartment6 />} />
        <Route path="/apartment7" element={<Apartment7 />} />
        <Route path="/apartment8" element={<Apartment8 />} />
        <Route path="/apartment9" element={<Apartment9 />} />
        <Route path="/buy" element={<Buy/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
     <Footer/>
     </Router>
  )
}

export default App
