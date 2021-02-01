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
  const handleClick = () => {
    setOpen(!open);
  }

  if (!open) {
    return null;
  }
  return (
    <div id="menu">
      <Link
        className=""
        to="/"
        onClick={handleClick}
      >
        About
      </Link>
      <Link className="" to="/tech"  onClick={handleClick}>
        Tech and CV
      </Link>
      <Link className="" to="/projects"  onClick={handleClick}>
        Projects
      </Link>
      <Link className="" to="/curriculum"  onClick={handleClick}>
        Contact me
      </Link>
    </div>
  );
};
