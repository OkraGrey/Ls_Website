// import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    
    <>
    <Navbar/>

    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

    </form>

    <Footer />
    </>
  );
};

export default Contact;