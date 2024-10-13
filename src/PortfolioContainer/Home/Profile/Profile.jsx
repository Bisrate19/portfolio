import React from "react";
import Typical from "react-typical";
import "./profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>
        </div>
        <div className="profile-details-name">
          <span className="" primary-text>
            {""}
            Hello, i'm <span className="">Bisrat</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {""}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 😎",
                  3100,
                  "Full Stack Developer 💻",
                  3100,
                  "MERN Stack Dev 🌐",
                  3100,
                  "Cross Platform Dev 📱",
                  3000,
                  "React/Next Dev ⚛️",
                  3000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire Me{" "}
          </button>
          <a href="myy.pdf" download="myy.pdf">
            <button className="btn highlighted-btn"> Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
