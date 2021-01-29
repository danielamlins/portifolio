import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import './Footer.css';
function Footer() {
    return(
        <div id="footer">
            <a href="https://www.linkedin.com/in/daniela-lins-275a53170/" target="_blank"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/danielamlins" tagrte="_blank"><FaGithub /> Github</a>
            <a href="https://twitter.com/DanielaMLins" target="_blank"><FaTwitter /> Twitter</a>
        </div>
    )
}

export default Footer;