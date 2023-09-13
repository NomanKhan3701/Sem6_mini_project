import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.scss";
import sparkles from "/public/assets/images/sparkles.png";
import hero_img from "/public/assets/images/hero_img.png";
import hero_imgbg from "/public/assets/images/hero_imgbg.jpg";
import smily_star from "/public/assets/images/emoji_smile_star.png";
import heart_eye from "/public/assets/images/emoji_eye_heart.png";

const HeroSection = () => {
  return (
    <div className="Hero_section Container">
      <div className="hero_left">
        <div className="helper_title"> - We can be</div>
        <div className="cachy_title">
          Your Reason{" "}
          <div className="flex">
            To <div className="smile">Smile</div>
            <img src={sparkles} alt="" />
          </div>
        </div>
        <div className="description">
          Safe&Secure is a decentralized platform that allows students, college
          and companies to store and share there documents at one place.
        </div>
        <div className="utils">
          <Link to="/upload">
            <div className="btn_primary">Try Uploading Your Records</div>
          </Link>
        </div>
      </div>
      <div className="hero_right">
        <div className="main_content_wrapper">
          <div className="image">
            <img className="hero_img" src={hero_img} alt="" />
            <img className="hero_imgbg" src={hero_imgbg} alt="" />
            <div className="card_wrapper">
              <div className="card">
                <div className="card_title">Upload Your Records</div>
                <img src={smily_star} alt="" />
              </div>
            </div>
            <div className="card_wrapper c1">
              <div className="card">
                <div className="card_title">Save and Share</div>
                <img src={heart_eye} alt="" />
              </div>
            </div>
            {/* <div className="card">
							<div className="card_title">Upload Your Records</div>
						</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
