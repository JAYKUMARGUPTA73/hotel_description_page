import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import HotelListing from './componenets/HostelListing';
import PropertyDetails from './componenets/PropertyDetails';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your routes within <Routes> */}
      <Route path="/property/:id" element={<PropertyDetails />} /> {/* Use 'element' prop */}
      <Route path="/" element={<HotelListing/>} /> Use 'element' prop
      </Routes>
    </Router>
  );
}

export default App;
