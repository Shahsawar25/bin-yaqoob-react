import React from "react";
import "./About.css";
import aboutArray from "./aboutArray";

const About = () => {
  return (
    <div class="about-section">
      <div class="overlay-content">
        {aboutArray.map((arrayItems, index) => {
          return (
            <div className="about-content" key={index}>
              <img
                src={arrayItems.icon}
                alt={arrayItems.title}
                className="icon"
              />
              <h3>{arrayItems.title}</h3>
              <p>{arrayItems.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
