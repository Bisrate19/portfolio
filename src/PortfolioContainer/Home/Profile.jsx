import React from "react";
import Typical from "react-typical";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
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
        </div>
        <div className="profile-details-name">
          <span className="" primary-text>
            {""}
            Hello, i'm <span className="highlighted-text">Bisrat</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {""}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev",
                  1000,
                  "full Stack Developer",
                  1000,
                  "MERN Stack Dev",
                  1000,
                  "Cross Platform V",
                  1000,
                  "React/Next Dev",
                  1000,
                ]}
              />
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
}
