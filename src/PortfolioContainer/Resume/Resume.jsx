import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaNode, FaDatabase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaCode, FaHeart } from "react-icons/fa";

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
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "Tailwind CSS", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Vue", ratingPercentage: 60 },
    { skill: "UI/UX designing", ratingPercentage: 40 },
    { skill: "Next JS", ratingPercentage: 65 },
    { skill: "Communication And Team Work", ratingPercentage: 100 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A personal portfolio website to showcase all details and projects in one place.",
      subHeading: "Technology used: React JS, CSS",
      link: "https://github.com/Bisrate19/portfolio",
    },

    {
      title: "Final Year Project Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "House Rental web app for Hossaena Town.",
      subHeading: "Technology used: HTML, CSS, JS, SQL",
      link: "https://your-final-year-project-link.com",
    },
    {
      title: "Landing Page",
      duration: { fromDate: "", toDate: "2023" },
      description: "",
      subHeading: "Technology used:Vue, Tailwind",
      link: "https://your-final-year-project-link.com",
    },
    {
      title: "E-Commerce Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "Team Member ",
      subHeading: "Technology used: Vue, Tailwind",
      link: "https://your-final-year-project-link.com",
    },
    {
      title: "Enterprise Management System",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "Contributed in the front end development",
      subHeading: "Technology used: Vue, Tailwind & Laravel",
      link: "https://your-final-year-project-link.com",
    },
    {
      title: "User Authentication & Employee Management System",
      duration: { fromDate: "2024", toDate: "2024" },
      description: "Remote Internship at Prodigy infotech",
      subHeading: "Technology used: react, Tailwind, node & MySQL",
      link: "https://github.com/Bisrate19/MERN-authentication",
    },
    // {
    //   title: "Final Year Project Website",
    //   duration: { fromDate: "2023", toDate: "2023" },
    //   description: "House Rental web app for Hossaena Town.",
    //   subHeading: "Technology used: HTML, CSS, JS, SQL",
    //   link: "https://your-final-year-project-link.com",
    // },

    {
      title: "My Asrat",
      duration: { fromDate: "2025", toDate: "2025" },
      description: "Aiming to track the Asrat we owe.",
      subHeading: "Technology used: Next.js, Tailwind CSS, MongoDB, Node.js",
      link: "https://asrattracking.vercel.app/",
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
          - Developed a website for the client with a landing page and
          integrated the web app with backend services for a new user onboarding
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
      <div className="scrollable-projects-container">
        {projectDetails.map((project, index) => (
          <ResumeHeading
            key={index}
            heading={project.title}
            subHeading={project.subHeading}
            description={project.description}
            fromDate={project.duration.fromDate}
            toDate={project.duration.toDate}
            link={project.link}
          />
        ))}
      </div>
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
