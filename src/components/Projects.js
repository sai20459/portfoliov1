import React from "react";
import "../index.css";

const Projects = () => {
  return (
    <section id="projects" className="mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="">
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://weissanalytics.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Weissanalytics
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Created chart view, add multiple charts to compare. Used
                  google maps api to plot houses. Created pluggable UI widgets.
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {["React.js", "Javascript", "Antd"].map((item, index) => (
                    <li className="mr-1.5 mt-2" key={index}>
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://fingoindia.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    FingoIndia
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Created UI pages using html and tailwind css, complex forms
                  and developed backend using node js, express and postgresql.
                  Built secure RESTful API’s
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {["Next.js", "Javascript", "Tailwindcss", "Antd"].map(
                    (item, index) => (
                      <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {item}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://alignometer.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Alignometer
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  This is a ranking platform for employees in an organization
                  which includes scores to employees, performance indicators,
                  leaderboards, team and individual scoring and evaluations
                </p>
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href="https://prequalification.i4strategies.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    i4strategies
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Multi capable industrial consulting firm that can assist your
                  project by reducing cost, detecting fraud and waste, improving
                  security and identifying risks before they become crises.
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {["React.js", "Javascript", "Antd"].map((item, index) => (
                    <li className="mr-1.5 mt-2" key={index}>
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    // href="https://prequalification.i4strategies.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    ValidateMe
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Multi capable industrial consulting firm that can assist your
                  project by reducing cost, detecting fraud and waste, improving
                  security and identifying risks before they become crises.
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {["React.js", "Javascript", "Antd"].map((item, index) => (
                    <li className="mr-1.5 mt-2" key={index}>
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    // href="https://prequalification.i4strategies.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Tyuts
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  A fully interactive tutorial application where teachers can
                  create courses and learners can learn & track progress like
                  Udemy
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {["React.js", "Javascript", "Antd", "Next.js"].map(
                    (item, index) => (
                      <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {item}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    // href="https://prequalification.i4strategies.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Stock Management System
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  The project's major goal was to keep track of inventory in a
                  database by scanning QR codes on products. When the stock
                  expires, it will notify the owner and give him a daily update
                  in pdf format.
                  <br />
                  My role in the project was to keep the design clean and
                  include a QR code scanner.
                </p>
                {/* <ul className="mt-2 flex flex-wrap">
                  {["React.js", "Javascript", "Antd", "Next.js"].map(
                    (item, index) => (
                      <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {item}
                        </div>
                      </li>
                    )
                  )}
                </ul> */}
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    // href="https://prequalification.i4strategies.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Crop Protection System From Animals
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  The focus of the project was based on surveillance with an
                  animal ward-off system employed in farmlands in order to
                  prevent agricultural lands vandalization by animals.
                  <br />
                  My role in the project team includes C coding, PIC
                  microcontroller and Wifi moduleIntegrations.
                </p>
                {/* <ul className="mt-2 flex flex-wrap">
                  {["React.js", "Javascript", "Antd", "Next.js"].map(
                    (item, index) => (
                      <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {item}
                        </div>
                      </li>
                    )
                  )}
                </ul> */}
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {/* Web Developer{" "} */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    // href="https://prequalification.i4strategies.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    Event Planner using PHP and JavaScript
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  A web page for event planning in a user-friendly way. Services
                  of event planning are collectively accessible here. People can
                  select the services they want to be handled by their choice
                  <br />
                  This is my individual project and I dealt with HTML, CSS, PHP
                  and Javascript.
                </p>
                {/* <ul className="mt-2 flex flex-wrap">
                  {["React.js", "Javascript", "Antd", "Next.js"].map(
                    (item, index) => (
                      <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {item}
                        </div>
                      </li>
                    )
                  )}
                </ul> */}
              </div>
              {/* <img
                src=""
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              /> */}
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Projects;
