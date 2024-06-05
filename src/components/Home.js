import React from "react";
import "../index.css";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h2>Welcome to My Portfolio</h2>
        <p>Your short introduction text here.</p>
        <a href="#portfolio" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
