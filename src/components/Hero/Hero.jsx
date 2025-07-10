import React from "react";
import "./hero.css";
import gretimag from "../../assets/about-84-9.png";

const Hero = () => {
  return (
    <div className="greeting-container">
      <div className="text-container">
        <h1>
          Welcome
          <br />
          <span className="span">to Bin Yaqoob Group</span>
        </h1>
        <p>
          <b>Bin Yaqoob Group </b>is a leading<b> Real Estate Developer</b>
          specializing in the creation of fully integrated residential and
          commercial societies. From acquiring prime land to developing modern
          infrastructure, we design and deliver vibrant communities that offer
          exceptional living and investment opportunities.
        </p>
      </div>

      <div className="image-container">
        <img src={gretimag} alt="" />
      </div>
    </div>
  );
};

export default Hero;
