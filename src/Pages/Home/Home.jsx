import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./home_style.css";
import { Link } from "react-router-dom";
import Main_Card from "../../components/Main_Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column justify-content-center">
        <div className="home-banner row mt-2">
          <div className="col-8  ">
            <img
              src="src\assets\images\ls_ed.png"
              className="img-fluid "
              alt="Background Image"
            />
          </div>
          <div className="mt-5 rounded rounded-2 bg-dark col-4 d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center w-50 mx-auto mt-4">
              <img
                src="src\assets\images\uet-lahore-white-logo.png"
                className=""
                alt=""
                srcset=""
              />
            </div>
            <div className=" text-light rounded-2 p-2 m-5 ">
              <p className="larger-text">
                Calling all talented students! Join the 40-year legacy of the
                UET Literary Society! Hone your literary skills & express
                yourself alongside your engineering expertise. Showcase your
                talent at upcoming events! Register now!
              </p>
              {/* <button>Hellooooooooo</button> */}
              <button className="w-100 border d-flex justify-content-center align-items-center rounded-5 ">
                <Link
                  to="/Events"
                  className="w-100 border-4 rounded-5 py-3 text-decoration-none larger-text btn_hov"
                >
                  Apply
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-dark mt-5">
        {/* Add your home page content here */}

        <div className="container ">
          <div className="row">
            <h2
              className="mt-4"
              style={{
                textAlign: "center",
                color: "black",
                padding: "20px",
                fontFamily: "Protest Riot ,sans-serif",
                background: "rgb(250, 143, 2)",
                borderRadius: "10px",
                letterSpacing: "2px",
              }}
            >
              Event Highlights
            </h2>
          </div>
          <div className="row ">
            <div className="col-6 my-5 ">
              <Main_Card
                img="src\assets\images\Events\Auditorium.jpeg"
                text="Mushaera/23 House Full "
              />
            </div>
            <div className="col-6 my-5">
              <Main_Card
                img="src\assets\images\Events\Mehshar.jpeg"
                text="Glimpse of Mehshar-e-Khayal 2023"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-6 mb-5">
              <Main_Card
                img="src\assets\images\Events\Kashmir.jpeg"
                text="Closing of Sada-e-Kashmir 2023"
              />
            </div>
            <div className="col-6 mb-5">
              <Main_Card
                img="src\assets\images\Events\YoumeIqbal.jpeg"
                text="Jury of Youm-e-Iqbal 2023"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bg-dark mt-lg-5">
        <div className="container">
          <div className="row dflex flex-row justify-content-center">
            <div className="col-8">
              <h1 className="vision_heading text-light mt-5">“Our Vision”</h1>
              <p className="vision_text text-light mb-5">
                The UET Literary Society, with its esteemed legacy of fostering
                a love for literature among young minds, is dedicated to
                promoting literary expression across the nation. We believe that
                enriching the lives of technical individuals with the power of
                language unlocks their potential to become not only skilled
                professionals, but also well-rounded and impactful members of
                society. By igniting a passion for the written word, we strive
                to cultivate critical thinking, empathy, and effective
                communication, qualities that empower individuals to contribute
                meaningfully to a brighter future.Through collaboration and
                outreach, we aim to broaden the reach of literature, bridging
                the gap between technical and artistic disciplines.
              </p>
              <p className="author_name">—Cheif Cordinator </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
