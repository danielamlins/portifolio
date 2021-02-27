import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div id="links">
        <a href="https://www.linkedin.com/in/daniela-lins-275a53170/"
          target="_blank"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/danielamlins" target="_blank">
          <FaGithub /> Github </a>
        <a href="https://twitter.com/DanielaMLins" target="_blank">
          <FaTwitter /> Twitter </a>
      </div>
      <div id="privacy">
        <a href="/Privacy"> Privacy Policy</a>
        <a href="/Impressum">Impressum</a>
      </div>
    </div>
  );
}

export default Footer;
