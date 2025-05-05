import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="https://blog.swiggy.com/wp-content/uploads/2024/02/Hyderabadi-Biryani-1024x538.jpg" alt="Left" className="about-image" />
        <div className="about-text">
          <h4>About Us</h4>
          <h1>Variety of flavours from American cuisine</h1>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
        </div>
        <img src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" alt="Right" className="about-image" />
      </div>
    </div>
  );
};

export default About;
