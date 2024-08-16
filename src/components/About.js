import React from "react";
import "../index.css";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <p>
        Certainly! Here's the revised bio without the name and within 150 words:
        A skilled full-stack developer with a strong focus on creating scalable,
        user-centric web applications. With a Bachelor of Engineering in
        Computer Science from Kalasalingam University, extensive experience
        spans both front-end and back-end technologies, including ReactJS,
        Node.js, and ExpressJS.
        <br /> <br />
        At Beyondscale Technologies Pvt Ltd, pivotal contributions include
        developing high-performance web applications, designing RESTful APIs,
        and enhancing user experiences. Significant projects include government
        inventory management systems and employee ranking platforms,
        demonstrating the ability to deliver robust solutions for complex needs.
        <br />
        <br />A commitment to continuous learning is evident through
        participation in hackathons, technical workshops, and achieving SAP
        Certified Development Associate certification. Published research on
        distributed computing intelligence further underscores expertise.
        <br /> <br /> Known for a collaborative approach, mentoring peers, and
        driving successful project outcomes. Future aspirations include
        exploring cutting-edge technologies and contributing to innovative
        projects that drive business growth. A forward-looking mindset ensures
        readiness for the challenges ahead.
      </p>
    </section>
  );
};

export default About;
