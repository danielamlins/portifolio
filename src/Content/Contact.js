import React, { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGlassMartiniAlt,
} from "react-icons/fa";
import "./contact.scss";

function Contact() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "danielamlins@gmail.com", // Change to your recipient
      from: email, // Change to your verified sender
      subject: subject,
      text: message,
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    const msgConfirmation = {
      to: email, // Change to your recipient
      from: "contact@danielalins.com", // Change to your verified sender
      subject: "Thank you for the message",
      text:
        "Thank you for the contact. We have received your message and will answer as soon as possible.",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    console.log(sgMail);
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(sgMail);
    sgMail
      .send(msgConfirmation)
      .then(() => {
        console.log("Confirmation email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div id="contact">
      <div className="contact-container">
        <h2>Contact me</h2>
        <div id="socialmedia">
          <a
            href="https://www.linkedin.com/in/daniela-lins-275a53170/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/danielamlins" target="_blank">
            <FaGithub />{" "}
          </a>
          <a href="https://twitter.com/DanielaMLins" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <h4>
          {" "}
          Follow me on my social networks, use the form below or write to{" "}
          <span className="email">danielamlins@gmail.com</span>
        </h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            required
            required
            onChange={(e) => setSubject(e.target.value)}
          ></input>

          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            rows="5"
            required
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
