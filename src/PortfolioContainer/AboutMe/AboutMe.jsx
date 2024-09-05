import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations"; // Fixed import typo

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return; // Fixed "faseScreen" typo
    Animations.animations.fadeInScreen(props.id);
  };

  useEffect(() => {
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    // Cleanup subscription on unmount
    return () => fadeInSubscription.unsubscribe();
  }, []);

  const SCREEN_CONSTANTS = {
    description:
      "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack for building applications with efficiency. Strong professional with a BSc, willing to be an asset for an organization.", // Fixed typos
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Front-End and Back-End Development",
        "Database Management",
        "Cross-Platform App Development",
        "Responsive Web Design",
        "Team Collaboration & Agile Methodologies",
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btnprimary-btn">Hire Me</button>
              <a href="myy.pdf" download="myy.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
                          </div>
          </div>
        </div>
      </div>
    </div>
  );
}