import React, { useEffect, useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import imgBack from "../../../src/images/mailz.jpeg"; // Ensure correct path
import "./ContactMe.css";
import Typical from "react-typical";

export default function ContactMe(props) {
  // States to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Here you can add form validation or send data to a server
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">Get In Touch With Me 😎</h2>
          <a href="https://www.linkedin.com/in/bisrat-tamire-24737928b/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://github.com/Bisrate19">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://www.instagram.com/kidus_tamire/">
            <i className="fa fa-instagram-square"></i>
          </a>
          <a href="https://www.youtube.com/channel/UC8crG29DqXeeLXCWM9q6bCg">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>
              <Typical
                loop={Infinity}
                steps={["Send Your Email Here! 😎", 9900, "", 3000]}
              />
            </h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
