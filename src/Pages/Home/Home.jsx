import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './home_style.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <>
    <Navbar />
    <div className="container d-flex flex-column justify-content-center">
      <div className="home-banner row mt-2">
        <div className="col-8  ">
        <img src="src\assets\images\ls_ed.png" className='img-fluid ' alt="Background Image" />
        </div>
        <div className="mt-5 rounded rounded-2 bg-dark col-4 d-flex flex-column justify-content-center">
          <div className='d-flex flex-column justify-content-center w-50 mx-auto mt-4'>
            <img src="src\assets\images\uet-lahore-white-logo.png" className='' alt="" srcset="" />
          </div>
          <div className=' text-light rounded-2 p-2 m-5 '>

            <p className='larger-text'>
            Calling all talented students!
            Join the 40-year legacy of the UET Literary Society! Hone your literary skills & express yourself alongside your engineering expertise. Showcase your talent at upcoming events! Register now!
            </p>
            {/* <button>Hellooooooooo</button> */}
            <button className='w-100 border d-flex justify-content-center align-items-center rounded-5 '>
           <Link to="/Events" className='w-100 border-4 rounded-5 py-3 text-decoration-none larger-text btn_hov'>
             Apply
            </Link>
           </ button>
                  
          </div>
          
        </div>
      </div>
      <div className="content">
        {/* Add your home page content here */}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Home;