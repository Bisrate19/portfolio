import React, { useEffect, useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import imgBack from "../../../src/images/mailz.jpeg";
import Typical from "react-typical";
import emailjs from "emailjs-com";
import "./ContactMe.css";

export default function ContactMe(props) {
  // States to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fade-in animation handler
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  useEffect(() => {
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    // Clean up subscription to avoid memory leaks
    return () => fadeInSubscription.unsubscribe();
  }, [fadeInScreenHandler]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the template parameters for EmailJS
    const templateParams = {
      to_name: "Bisrat", // Replace this with the recipient's name
      from_name: name, // Sender's name from the form input
      from_email: email, // Sender's email from the form input
      message: message, // Sender's message from the form input
    };

    // Send email using EmailJS
    emailjs

      // .send(
      //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: form.name,
      //     to_name: "Bisrat",
      //     from_email: form.email,
      //     to_email: "bisrattamire288@gmail.com",
      //     message: form.message,
      //   },
      //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      // )

      .send(
        "service_cntvi9l", // service ID
        "template_uy3f4wi", // template ID
        templateParams,
        "bclceHT6twINaw2KZ" // public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully! 😎");
          // Clear form fields after submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">Get In Touch With Me 😎</h2>
          <a
            href="mailto:bisrattamire288@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
          </a>

          <a href="https://www.linkedin.com/in/bisrattamire/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://github.com/Bisrate19">
            <i className="fa fa-github-square"></i>
          </a>
          <a
            href="https://wa.me/+251973111323"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
          <a
            href="https://t.me/@BisratTamire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-telegram"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>
              <Typical
                loop={Infinity}
                steps={["Send Your Email Here! 😎", 9930, "", 3000]}
              />
            </h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name} // bind input to state
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email} // bind input to state
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={message} // bind textarea to state
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>

          {/* Display Success Message */}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
