import "./Sidemenu.scss";
import React, { useState, useRef, useEffect } from "react";
import { Link, Router } from "react-router-dom";

// Stiky menu adapted from https://pantaley.com/blog/Create-sticky-header-only-with-React-Hooks/
function Sidemenu(props) {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  console.log(props);
  return (
    <div className="side-menu">
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <ul>
            <h1 onClick={() => window.scrollTo(0, 0)}>WebDev</h1>

          <Link className="menu-link" to="/">
            <span className="hover hover-center">About </span>
          </Link>
          <Link className="menu-link" to="/tech">
            <span className="hover hover-center">
              Technologies / Curriculum{" "}
            </span>
          </Link>
          <Link className="menu-link" to="/projects">
            <span className="hover hover-center"> Projects </span>
          </Link>
          <Link className="menu-link" to="/contact">
            <span className="hover hover-center"> Contact me </span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidemenu;
