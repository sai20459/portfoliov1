import React from "react";
import "../index.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Sai Naveen Janjanam
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Web developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Experienced Web Developer with a demonstrated history of working in
          the computer software industry.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {["About", "Experience", "Projects"].map((item, index) => (
              <li key={index}>
                <a
                  className="group flex items-center py-3 active"
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        {["github", "Linkedin"].map((item, index) => (
          <li className="mr-5 text-xs shrink-0" key={index}>
            <a
              className="block hover:text-slate-200"
              target="_blank"
              rel="noreferrer noopener"
              title={item}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
