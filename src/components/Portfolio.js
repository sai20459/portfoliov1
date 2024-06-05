import React from "react";
import "../index.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project">
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project Title 1</h3>
            <p>Short description of project 1.</p>
            <a href="project-link-1">View Project</a>
          </div>
          <div className="project">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project Title 2</h3>
            <p>Short description of project 2.</p>
            <a href="project-link-2">View Project</a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
