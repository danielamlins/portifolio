import "./Sidemenu.scss";
import { Link, Router } from "react-router-dom";

function Sidemenu(props) {
  console.log(props);
  return (
      <ul className="list">
        <Link to="/about">About</Link>
        <Link to="/tech">
          Tech
        </Link>
        <Link to="/projects">
          Projects
        </Link>
      </ul>
  );
}

export default Sidemenu;
