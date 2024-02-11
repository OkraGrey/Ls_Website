import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="mt-4 bg-dark">
      <div className="socials d-flex flex-row justify-content-center">
        <a
          href="https://www.linkedin.com/company/uet-literary-society/?originalSubdomain=pk"
          target="_blank"
        >
          LinkedIn &nbsp;
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com/uetls/" target="_blank">
          Facebook &nbsp;
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/uetliterarysociety/?hl=en"
          target="_blank"
        >
          Instagram &nbsp;
          <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
      </div>
      <div className="footer mt-auto text-center py-3 bg-dark text-bg-light text-light me-4">
        Copyright &copy; {new Date().getFullYear()} UET Literary Society
      </div>
    </footer>
  );
};

export default Footer;
