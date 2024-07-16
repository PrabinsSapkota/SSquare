import React from "react";
import "./Hero.css";
import ellipse1 from "../../assets/ellipse1.png";

const Hero = () => {
  return (
    <div className="tail">
    <div className="container">
      <div className="hero-left">
        <h1>Online Webinar</h1>
        <h2>Tax Planning Strategies & Your Tax Questions</h2>
        <h3>Date & Time: June 15th Saturday 10am, Online</h3>
        <p>
          Are you ready to supercharge your tax knowledge and get answers to all
          your burning tax questions? Join us for an enlightening 2-hour tax
          discussion.
        </p>
        <div className="btn">
          <div className="btn1">Register Now</div>
          <div className="btn2">Learn More</div>
        </div>
      </div>

      <div className="hero-right">
        <div>
          <img src={ellipse1} alt="not found" />
        </div>   
      </div>
      <div className=" absolute r-5 w-[185px] h-[185px] ellipse border-2 rounded-full">
          <h1>Santosh Sah</h1>
          <p>Certified Public Accountant (CPA)</p>
          <h3>(232) 456-7890</h3>
        </div>
    </div>
    
        </div>

    
  );
};

export default Hero;
