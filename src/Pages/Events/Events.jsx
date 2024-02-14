import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardEvent from "./CardEvent";
import "./CardEvent.css";
const Events = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid ">
        <div className="row m-5">
          <div className="col-8 ">
            <img
              src="/assets/images/LS_Back.jpg"
              className="img-fluid b_col"
              alt=""
              srcset=""
            />
          </div>

          <div className=" rounded rounded-2 custom_back col-4 d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center w-50 mx-auto my-3">
              <img
                src="/assets/images/uet-lahore-white-logo.png"
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
      </div>
      <div className="bg-dark w-100">
        {/* <div className="main_img">
            <img src="src\assets\images\Mehshar.jpeg" alt="" srcset="" />
          </div> */}
        <div className="container ">
          <div className="row">
            <div className="col-6">
              <CardEvent
                img="/assets/images/Mehshar-e.png"
                title="Mehshar-e-Khayal 2024"
                text="Mehshar-e-Khayal empowers the young and brilliant minds to showcase their critical thinking and put forward their perceptions and views on the given topics which covers multiple domains"
                buttons="2"
              />
            </div>
            <div className="col-6">
              <CardEvent
                img="/assets/images/quiz_u.jpg"
                title="Quizdom 7.0"
                text="All Pakistan Quiz Compeition invites brilliant people around the country from all institutes to join us contribute in the othos of let the knowledge shines. Get yourself register now. "
                buttons="1"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <CardEvent
                img="/assets/images/SadaKashmir.jpeg"
                title="Sada-e-Kashmir 2024"
                text="Kasmir is the jugglar vein of Pakistan and none can deny that. To condemn the opression against our brothers and sisters in Kashmir, we invite you to get your self registerd and put forward your contributions towards the cause."
                link_1="https://docs.google.com/forms/d/e/1FAIpQLSd2gV8cKxh7bV6OlS5PULKwivHjF4wTeHCsH27VLr8ELVZPdQ/viewform"
                buttons="2"
                link_2="https://bit.ly/Sada_e_Kashmir_Entries_Submission_Form"
              />
            </div>
            <div className="col-6 ">
              <CardEvent
                img="/assets/images/Mehshar-e.png"
                title="Mehshar-e-Khayal 2024"
                text="Mehshar-e-Khayal empowers the young and brilliant minds to showcase their critical thinking and put forward their perceptions and views on the given topics which covers multiple domains"
                buttons="1"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default Events;

// I am working on Events. Work remaining includes Cards setting and adjustment. Live time and Date Display.
//Add links to the google forms. Also add and adjust the footer at the bottom.
// Also the mailing section which is the contact page is almost 0 so it needs some work as well.
// Before puttin it to production, I have to change the links to images so that no issue occurs.
