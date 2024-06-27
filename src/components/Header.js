import React from "react";
import "../index.css";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
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
            {["about", "experience", "projects"].map((item, index) => (
              <li key={index}>
                <a
                  className="group flex items-center py-3 cursor-pointer"
                  href={`#${item}`}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        {[
          {
            title: "github",
            href: "https://github.com/sai20459",
            src: "/github-mark.svg",
          },
          {
            title: "Linkedin",
            href: "https://www.linkedin.com/in/sai-naveen-janjanam-75046620b/",
            src: "/linkedin.svg",
          },
        ].map((item, index) => (
          <li className="mr-5 text-xs shrink-0" key={index}>
            <a
              className="block hover:text-slate-200"
              target="_blank"
              rel="noreferrer noopener"
              title={item}
              href={item.href}
            >
              <span className="sr-only">{item.title}</span>
              <img
                src={item.src}
                alt={item.title}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
