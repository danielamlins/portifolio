import "./Sidemenu.scss";
import { Link, Router } from "react-router-dom";

function Sidemenu(props) {
  console.log(props);
  return (
    <ul className="side-menu">
      <h1>WebDev</h1>
      <Link className="menu-link" to="/">
        <span className="hover hover-center"> About </span>
      </Link>
      <Link className="menu-link" to="/tech">
        <span className="hover hover-center"> Tech </span>
      </Link>
      <Link className="menu-link" to="/projects">
        <span className="hover hover-center"> Projects </span>
      </Link>
      <Link className="menu-link" to="/projects">
        <span className="hover hover-center"> Curriculum </span>
      </Link>
      <Link className="menu-link" to="/projects">
        <span className="hover hover-center"> Contact me </span>
      </Link>
    </ul>
  );
}

export default Sidemenu;
