import { React } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./contact.scss";

function Contact() {
  return (
    <div id="contact">
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
      <form>
        <label htmlFor="email">E-mail *</label>
        <input type="email" id="email"></input>

        <label htmlFor="subject">Subject *</label>
        <input type="text" id="subject"></input>

        <label htmlFor="message">Message *</label>
        <textarea id="message" rows="5"></textarea>
        <div className="button">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
