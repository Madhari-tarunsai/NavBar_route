import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        <h1><span className="icon">🍽️</span> OUR CHEFS <span className="icon">👨‍🍳</span></h1>
      </div>
      <div className="services-cards">
        <div className="chef-card">
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/chefe/chefeThumb1_1.png"
            alt="Chef 1"
            className="chef-image"
          />
          <h2>Ralph Edwards</h2>
          <p>Chef Leader</p>
        </div>
        <div className="chef-card">
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/chefe/chefeThumb1_2.png"
            alt="Chef 2"
            className="chef-image"
          />
          <h2>Leslie Alexander</h2>
          <p>Chef Assistant</p>
        </div>
        <div className="chef-card">
          <img
            src="https://www.ex-coders.com/php-template/fresheat/assets/img/chefe/chefeThumb1_3.png"
            alt="Chef 3"
            className="chef-image"
          />
          <h2>Ronald Richards</h2>
          <p>Chef Assistant</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
