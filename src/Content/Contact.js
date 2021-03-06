import { send } from "@sendgrid/mail";
import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./contact.scss";

function Contact() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [emailSent, setEmailSent] = useState();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleSubmit = (e) => {
    setBtnDisabled(true);
    e.preventDefault();
    let body = {
      email: email,
      subject: subject,
      message: message,
    };
    fetch("https://emailgo.danielalins.com/email", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => {
        setEmailSent("sent");
        setBtnDisabled(false);
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((e) => {
        setEmailSent("error");
        console.log(e);
        setBtnDisabled(false);
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
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          ></input>

          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {emailSent === "sent" ? (
            <div className="form-sent green">
              Email sent! Thank you for your e-mail!
            </div>
          ) : emailSent === "error" ? (
            <div className="form-sent red">Error! Please try again</div>
          ) : null}

          <label htmlFor="agree">
            <input
              type="checkbox"
              id="agree"
              required
            />
            I agree to <a href="/privacy">Privacy Policy</a>
          </label>

          <div className="button">
            <button type="submit" disabled={btnDisabled}>
              {btnDisabled ? "Sending" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
