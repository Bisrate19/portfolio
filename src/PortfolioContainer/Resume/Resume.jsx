import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

import educationLogo from "../../assets/Resume/education.svg";
import workHistoryLogo from "../../assets/Resume/work-history.svg";
import programmingSkillsLogo from "../../assets/Resume/programming-skills.svg";
import projectsLogo from "../../assets/Resume/projects.svg";
import interestsLogo from "../../assets/Resume/interests.svg";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: educationLogo },
    { label: "Work History", logoSrc: workHistoryLogo },
    { label: "Programming Skills", logoSrc: programmingSkillsLogo },
    { label: "Projects", logoSrc: projectsLogo },
    { label: "Interests", logoSrc: interestsLogo },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 55 },
    { skill: "Express JS", ratingPercentage: 45 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 20 },
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 95 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "A personal portfolio website to showcase all details and projects in one place.",
      subHeading: "Technology used: React JS, Bootstrap",
    },
    {
      title: "Final Year Project Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "House Rental web app for Hossaena Town.",
      subHeading: "Technology used: HTML, CSS, JS, SQL",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Wachemo University, Hossaena Ethiopia"}
        subHeading={"Bachelor Of Science Information Technology"}
        fromDate={"2019"}
        toDate={"2023"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Tamrat Zemarianm Wholesale Trade"}
        subHeading={"Data Encoder/ICT Specialist"}
        fromDate={"2023"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as a data encoder and ICT specialist for a private company.
        </span>
        <br />
        <span className="resume-description-text">
          Developed a website for the client with a landing page and integrated the web app with backend services for a new user onboarding application.
        </span>
        <br />
        <span className="resume-description-text">
          Worked on UI development based on the given designs.
        </span>
      </div>
    </div>,
    <div className="resume-screen-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="bullet icon"
        />
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="bullet-container">
            <div className="bullet-icons">
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
