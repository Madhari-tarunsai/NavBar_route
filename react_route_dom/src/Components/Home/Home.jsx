import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src="https://metrobi.com/wp-content/uploads/2024/08/Free-restaurant-business-plan-templates.webp"
          alt="hom_img"
          className="home-image"
        />
        <div className="image-text">
          <h1>Partner with Zomato and grow your business</h1>
          <p>0% commission for 1st month! Valid for new restaurant partners in select cities</p>
          <button>Register your restaurant</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
