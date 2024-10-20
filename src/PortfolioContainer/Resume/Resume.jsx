import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FaNode, FaDatabase, } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaCode, FaHeart } from 'react-icons/fa';

import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  const iconMapping = {
    education: FaGraduationCap,
    node: FaNode,
    workexperience: AiOutlineUser,
    database: FaDatabase,
    skills: GiSkills,
    projects: FaCode,
    interest: FaHeart,
  };

  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [props.id]);

  // Keep the ResumeHeading definition only once here
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading || ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + " - " + props.toDate}
              </div>
            ) : null}
          </div>

          <div className="resume-sub-heading">
            <span>{props.subHeading || ""}</span>
          </div>

          <div className="resume-heading-description">
            <span>{props.description || ""}</span>
          </div>

          {props.link && (
            <div className="resume-heading-link">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  const resumeBullets = [
    {
      label: "Education",
      logoSrc: "education",
    },
    {
      label: "Work Experience",
      logoSrc: "workexperience",
    },
    {
      label: "Skills",
      logoSrc: "skills",
    },
    {
      label: "Projects",
      logoSrc: "projects",
    },
    {
      label: "Interest",
      logoSrc: "interest",
    },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "React Native", ratingPercentage: 35 },
    { skill: "Next JS", ratingPercentage: 45 },
    { skill: "Node JS", ratingPercentage: 35 },
    { skill: "Mongo DB", ratingPercentage: 10 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 100 },
    { skill: "CSS", ratingPercentage: 90 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A personal portfolio website to showcase all details and projects in one place.",
      subHeading: "Technology used: React JS, CSS,",
      link: "https://github.com/Bisrate19/portfolio",
    },
    {
      title: "Final Year Project Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "House Rental web app for Hossaena Town.",
      subHeading: "Technology used: HTML, CSS, JS, SQL",
      link: "https://your-final-year-project-link.com",
    },
    
    /*
    for other projects
    {
      title: "Final Year Project Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "House Rental web app for Hossaena Town.",
      subHeading: "Technology used: HTML, CSS, JS, SQL",
      link: "https://your-final-year-project-link.com",
    }, */
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
        heading={"Tamrat Zemariam Wholesale Trade"}
        subHeading={"Data Encoder/ICT Specialist"}
        fromDate={"2023"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Currently working as a data encoder and ICT specialist for a private
          company.
        </span>
        <br />
        <span className="resume-description-text">
          - Developed a website for the client with a landing page and integrated
            the web app with backend services for a new user onboarding
          application.
        </span>
        <br />
        <span className="resume-description-text">
          - Worked on UI development based on the given designs.
        </span>
      </div>
    </div>,
    <div className="resume-screen-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: `${skill.ratingPercentage}%` }}
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
          link={project.link} // Add link to the project
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    const offsetHeight = 360;
    const newCarousalOffset = {
      transform: `translateY(${index * offsetHeight * -1}px)`,
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      const IconComponent = iconMapping[bullet.logoSrc];
      return (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          {IconComponent && <IconComponent />}
          {bullet.label}
        </div>
      );
    });
  };

  const getResumeScreen = () => {
    return (
      <div
        style={{ transform: carousalOffSetStyle.transform }}
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
