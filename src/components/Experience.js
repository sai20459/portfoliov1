import React from "react";
import "../index.css";

const Experience = () => {
  return (
    <section
      id="Experience"
      // className="about"
    >
      <div>
        <div>
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
      <div className="mt-12">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          View full resume
        </a>
      </div>
    </section>
  );
};

export default Experience;
