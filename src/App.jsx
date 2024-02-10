import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App
