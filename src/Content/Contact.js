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
    let body = {
      email: email,
      subject: subject,
      message: message,
    };
    fetch("https://email.danielalins.com/email", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.JSON())
      .then((data) => {
        console.log(data);
        if (data[0] === "" && data[1] === "") {
          alert("Than you. Email sent");
        } else {
          alert("Error. Please, try again!");
        }
      })
      .catch(() => alert("Error. Please, try again!"));
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
