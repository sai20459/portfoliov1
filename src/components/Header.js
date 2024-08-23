import React, { useEffect, useState } from "react";
import "../index.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  console.log(activeSection, "activeSectionactiveSection");
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    Sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  const Sections = ["about", "experience", "projects"];
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
          Full-stack developer specializing in scalable web applications and
          continuous innovation.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {Sections.map((item, index) => (
              <li key={index}>
                <a
                  className="group flex items-center py-3 cursor-pointer"
                  href={`#${item}`}
                >
                  <span
                    className={
                      activeSection === item
                        ? "nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all"
                        : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"
                    }
                  />
                  <span
                    className={
                      activeSection === item
                        ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-200"
                        : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200"
                    }
                  >
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
            src: "/github.svg",
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
