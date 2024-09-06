import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
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
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
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
      title: "personal portfolio website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A personal portfolio website to showcase all details and projects at one place",
      subHeading: "Technoogy used : React JS, Bootstrap",
    },
    {
      title: "Final Year Project website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "House Rental web app to Hossaena Town",
      subHeading: "Technoogy used : HTML,CSS,JS,SQL",
    },
    {
      title: "personal portfolio website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A personal portfolio website to showcase all details and projects at one place",
      subHeading: "Technoogy used : React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Wachemo University,Hossaena Ethiopia"}
        subHeading={"Bachelor Of Science Information Technology"}
        fromDate={"2019"}
        toDate={"2023"}
      />
    </div>,
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Wachemo University,Hossaena Ethiopia"}
        subHeading={"Bachelor Of Science Information Technology"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      ,
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"Wachemo University,Hossaena Ethiopia"}
          subHeading={"Bachelor Of Science Information Technology"}
          fromDate={"2019"}
          toDate={"2023"}
        />
      </div>
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
          currently working as a data encoder ans ICT specialist for a private
          conpany
        </span>
      </div>

      <div className="experience-description">
        <span className="resume-description-text">
          developed a website for client with landing page ........
        </span>
        <br />
        <span className="resume-description-text">
          -- Integrated the web app with backend services t create a new user
          onboarding application with dynamic form content.
        </span>
        <br />
        <span className="resume-description-text">
          -- i stretch my mental capacity to develop ui as per the given
          designs.
        </span>
        <br />
      </div>
    </div>,
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}
