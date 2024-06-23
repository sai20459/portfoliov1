import React from "react";
import "../index.css";

const About = () => {
  return (
    <section
      id="About"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <p>
        Experienced Web Developer with a demonstrated history of working in the
        computer software industry. Skilled in Communication, SAP FI, Cascading
        Style Sheets (CSS), HTML5, and JavaScript. Strong engineering
        professional with a Bachelor of Technology - BTech focused in Computer
        Science from Kalasalingam University. o
      </p>
      <p>Your short introduction text here.</p>
      {/* <a href="#portfolio" className="btn">
        View My Work
      </a> */}
    </section>
  );
};

export default About;
