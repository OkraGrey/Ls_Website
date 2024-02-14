// import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ContactUs } from "../../components/Form";
import { ToastContainer } from "react-toastify";
const Contact = () => {
  return (
    <>
      <Navbar />

      {/* <form
        id="form"
        className="text-center"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <h2>Contact us</h2>
      </form> */}
      <ToastContainer />
      <ContactUs />
      <ToastContainer />

      <Footer />
    </>
  );
};

export default Contact;
