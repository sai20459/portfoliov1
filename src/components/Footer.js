import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
