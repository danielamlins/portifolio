import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

export const Burger = ({ open, setOpen }) => {
  if (open) {
    return (
      <div
        id="burger"
        className="close"
        onClick={() => {
          setOpen(!open);
        }}
      >
        X
      </div>
    );
  }
  return (
    <div
      id="burger"
      className="open"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export const Menu = ({ open, setOpen }) => {
  const [show, setShow] = useState(open);
  if (!open) {
    return null;
  }
  return (
    <div id="menu">
      <Link className="" to="/">
        About
      </Link>
      <Link className="" to="/tech">
        Tech and CV
      </Link>
      <Link className="" to="/projects">
        Projects
      </Link>
      <Link className="" to="/curriculum">
        Contact me
      </Link>
    </div>
  );
};
