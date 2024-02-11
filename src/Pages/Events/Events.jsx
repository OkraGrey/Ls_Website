import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid vh-100">
        <div className="row m-5">
          <div className="col-8 ">
            <img
              src="src\assets\images\LS_Back.jpg"
              className="img-fluid"
              alt=""
              srcset=""
            />
          </div>

          <div className=" rounded rounded-2 bg-dark col-4 d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center w-50 mx-auto my-3">
              <img
                src="src\assets\images\uet-lahore-white-logo.png"
                className=""
                alt=""
                srcset=""
              />
            </div>
            <div className=" text-light rounded-2 p-2 mx-2 ">
              <p className="larger-text">
                UET Literary Society has been organizing national events since
                its birth. This year we cordially invites you to participate in
                the upcoming events.
              </p>
            </div>
          </div>
        </div>

        <div className="MehshareKhayal">
          <div className="main_img">
            <img src="src\assets\images\Mehshar.jpeg" alt="" srcset="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
