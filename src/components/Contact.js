import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form action="submit-form.php" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div className="social-media">
          <a href="your-twitter-link">Twitter</a>
          <a href="your-linkedin-link">LinkedIn</a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
