import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import propertiesData from './properties.json';

const Buy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minRooms, setMinRooms] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxRooms, setMaxRooms] = useState(10); 
  const [maxPrice, setMaxPrice] = useState(10000);
  const [houseType, setHouseType] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [postCode, setPostCode] = useState('');
  const [houseData, setHouseData] = useState([]); 

    const navigate = useNavigate();

    useEffect(() => {
      // Set property data from imported JSON file
      setHouseData(propertiesData);
    }, []); // Run this effect only once on component mount


    // State to manage cart items
  const [cartItems, setCartItems] = useState([]);
  // Function to add an item to the cart
  const addToCart = (property) => {
    // To check if the property is already in the cartItems array
    const isAlreadyAdded = cartItems.some((item) => item.name === property.name);
  
    // If the property is not already in the cartItems array, to add it
    if (!isAlreadyAdded) {
      setCartItems([...cartItems, property]);
    } 
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleHouseTypeChange = (e) => {
    setHouseType(e.target.value.toLowerCase());
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinRoomsChange = (e) => {
    setMinRooms(parseInt(e.target.value, 10));
  };

  const handleMaxRoomsChange = (e) => {
    setMaxRooms(parseInt(e.target.value, 10));
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value, 10));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value, 10));
  };

  const handleDateAddedChange = (e) => {
    setDateAdded(e.target.value.toLowerCase());
  };

  const handlePostCodeChange = (e) => {
    setPostCode(e.target.value.toLowerCase());
  };

  const filteredHouses = houseData.filter((house) => {
    const matchesSearchTerm = house.house.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinRooms = house.rooms >= minRooms;
    const matchesMaxRooms = house.rooms <= maxRooms;
    const matchesPrice = house.price >= minPrice && house.price <= maxPrice;
    const matchesHouseType = houseType !== '' ? house.type.toLowerCase() === houseType : true;
    const matchesDateAdded = dateAdded !== '' ? house.dateAdded === dateAdded : true;
    const matchesPostCode =
      postCode !== '' ? house.postCode.toLowerCase().includes(postCode.toLowerCase()) : true;
  
    return (matchesSearchTerm && matchesMinRooms && matchesMaxRooms && matchesPrice && matchesHouseType && matchesDateAdded && matchesPostCode);});

  return (
    <>
   <br /><br />
        <h3 className='text-center text-success mb-1 my-5'>Find Your Dream House</h3>
      <div className="container">
  <div className="row">

    <div className="col-md-3 my-5">
    <small className="text-success fw-bold">Search by house name :</small>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by House Name..."
        className="form-control"
        style={{ borderColor: 'green' }} 
      />
    </div>

    <div className="col-md-2 my-5">
        <small className="text-success fw-bold">Search by postal code:</small>
        <input
          type="text"
          value={postCode}
          onChange={handlePostCodeChange}
          placeholder="Postal Code "
          className="form-control"
          style={{ borderColor: 'green' }}
        />
      </div>

    <div className="col-md-2 my-5">
    <small className="text-success fw-bold">Minimum rooms needed:</small>
      <input
        type="number"
        value={minRooms}
        onChange={handleMinRoomsChange}
        placeholder="Min Rooms"
        className="form-control"
        style={{ borderColor: 'green' }} 
      />
    </div>

    <div className="col-md-3 my-5">
          <small className="text-success fw-bold">Maximum rooms needed:</small>
          <input
            type="number"
            value={maxRooms}
            onChange={handleMaxRoomsChange}
            placeholder="Max Rooms"
            className="form-control"
            style={{ borderColor: 'green' }} 
          />
    </div>

    <div className="col-md-2 my-5">
    <small className="text-success fw-bold">Minimum price :</small>
      <input
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
        placeholder="Min Price"
        className="form-control"
        style={{ borderColor: 'green' }} 
      />
    </div>

    <div className="col-md-2 my-1">
          <small className="text-success fw-bold">Maximum price :</small>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Max Price"
            className="form-control"
            style={{ borderColor: 'green' }} 
          />
        </div>
       
        <div className="col-md-2 my-1">
          <small className="text-success fw-bold">Search by house type:</small>
          <select value={houseType} onChange={handleHouseTypeChange} className="form-select" style={{borderColor: 'green',}}>
            <option value="">Any</option>
            <option value="residencies">Residencies</option>
            <option value="apartments">Apartments</option>
          </select>
        </div>

        <div className="col-md-2 my-1">
          <small className="text-success fw-bold">Search by added date:</small>
          <select value={dateAdded} onChange={handleDateAddedChange} className="form-select" style={{borderColor: 'green',}}> 
            <option value="">Any</option>
            <option value="2023/12/12">2023/12/12</option>
            <option value="2023/11/12">2023/11/12</option>
            <option value="2024/01/04">2024/01/04</option>
          </select>
        </div>

    <div className='col-md-3 my-1'>
            <div className='card p-0 m-n4 'style={{ borderColor: 'green' }} >
              <div className='card-body'>
                <h5 className='card-title text-success fw-bold'>Favourites</h5>
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <p className='card-text'>{item.name}</p>
                    <button className='btn btn-danger' onClick={() => removeFromCart(index)}>Remove</button>
                  </div> ))}
              </div>
            </div>
          </div>

  </div>
</div>

       <div className="container">
            <div className="row mt-2">
        <div className="row">
             {filteredHouses.map((house) => (
            <div key={house.id} className="col-md-4 my-4">
              <div className="card">
                <img src={house.image} className="card-img-top" height="250" width="15" alt={house.house} />
                <div className="card-body">
                  <p className="card-text">{house.house}</p>
                  <h6 className="card-text small"><span style={{ color: 'grey' }}>{house.description}</span></h6>
                  <p className="card-text">Type: {house.type}</p>
                  <p className="card-text">Rooms: {house.rooms}</p>
                  <p className="card-text">Price: <span style={{ color: 'red' }}>${house.price}</span></p>
                  <p className="card-text">Date: {house.dateAdded}</p>
                  <p className="card-text">Postal Code: {house.postCode}</p>
                  <a className="btn btn-success" onClick={() => navigate(`/apartment${house.id}`)}>View</a>
                  <button className="btn btn-success ms-3" onClick={() => addToCart({ name: house.house })}>
                    Add to Favourites
                  </button>
                </div>
              </div>
            </div>
))}
</div>
            </div>
       </div>
       
    </>
  );
}

export default Buy
