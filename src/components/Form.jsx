import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const send = (e) => {
  toast("🦄 Success", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  form.current.reset();
};

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rfub897", "template_qp5o41a", form.current, {
        publicKey: "ee4S2sa7MtiX3hMwA",
      })
      .then(
        () => {
          //   console.log();
          //   alert("SUCCESS!");
          toast("Email Sent");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={send}
      className="bg-light d-flex flex-column justify-content-center "
    >
      <div className=" container d-flex flex-column justify-content-center p-lg-5 color_form rounded w-50 ">
        <div className="form_img_container pt-5">
          <img
            src="/assets/images/output-onlinepngtools.png"
            alt=""
            srcset=""
          />
          <p className="form-desc">
            UET Literary Society is always there to answer your queries. Incase
            of any problem or issue, drop your query by filling the form below
            and one of our representative will get to you very soon.
          </p>
          <div className="line mb-5">⠀</div>
        </div>

        <label className="contact_label">Name</label>
        <input
          className="contact_input"
          type="text"
          name="from_name"
          placeholder="e.g Tehzib Hafi"
          required
        />
        <label className="contact_label">Email</label>
        <input
          className="contact_input"
          type="email"
          name="from_email"
          placeholder="e.g abc@example.com"
          required
        />
        <label className="contact_label">Message</label>
        <textarea
          className="contact_input"
          name="message"
          placeholder="I am interested about knowling this"
          required
        />
        <input className="btn-form" type="submit" value="Send" />
      </div>
    </form>
  );
};
