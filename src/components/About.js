import React from "react";
import "../index.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <img src="profile.jpg" alt="Profile Picture" className="profile-pic" />
        <div className="bio">
          <h2>About Me</h2>
          <p>
            Your bio goes here. Talk about your background, skills, and
            experience.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
