import React from "react";
import "./Card.css";
import rectangle from "../../assets/rectangle.png";

const Card = () => {
  return (
    <div className="container2">
      <div className="left-card">
        <div className="img">
          <img src={rectangle} alt="" />
        </div>
        <div className="head">
          <h1>
            Helping Nepalese American Community File & Save on taxes for more
            than 20 years.
           
          </h1>
          </div>

          <div className="head1">
          <h2>What makes Ssquare Firm different than other accountants?</h2>
          </div>
        

        <div>
                <div className="ul">
          <li>We love getting to know you personally.</li>
          <li>We focus on making you compliant.</li>
          <li>We do not outsource your tax work to overseas.</li>
          <li>Your data is saved in Amazon Cloud Infrastructure</li>
          <li>We help you save, grow & protect your money.</li>
          </div>
          <div className="btn-left-card">
                <button>Contact SSQUARE Firm</button>
          </div>
        </div>
      </div>

      <div className="right-card">
        <h1>Welcome To Ssquare Firm</h1>
        <h2>Personal & Business Tax Services</h2>
        
          <hr className="w-[553px] h-[1px] bg-green-700 border-0" /> 
        
        <p>
          Sanjiv Gupta CPA is the top choice for Non-Resident Indians residing
          in the United States or abroad.You can come meet with us personally in
          one of the three offices in bay area or set up a phone/zoom
          consultation appointment anywhere in the world.Our office can help you
          set up a new business in the US and take care of all the tax,
          accounting, and payroll needs.
        </p>
        <h4>Request More Info From Our Office:</h4>
        <div className="right-bottom-container">
                
                <span className="box1">Consultation Appointment with Santosh Sah</span>
                <span className="box2">High Income Tax Planning Consultation</span>
                <span className="box3">Foreign Income & Asset Reporting Consultation</span>
                <span className="box4">Buying or Selling Property Consultation</span>
                <span className="box5">Personal Tax Filing & Consultation Services</span>
                <span className="box6">Business Tax Filing & Consultation Services</span>
                <span className="box7">Payroll or Sales Tax Filing Services</span>
              
        </div>
      </div>
    </div>
  );
};

export default Card;
