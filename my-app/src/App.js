import React, { Component } from "react";
import "./App.scss";
import Hero from "./Hero/Hero";
import Sidemenu from "./Sidemenu/Sidemenu";
import Footer from "./Footer/Footer";
import About from "./Content/About";
import Tech from "./Content/Tech";
import Projects from "./Content/Projects";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Hero />
          <div className="main">
            <div className="side-menu">
              <Sidemenu />
            </div>
            <div className="content">
              <Route path="/" exact component={About} />
              <Route path="/tech" component={Tech} />
              <Route path="/projects" exact component={Projects} />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
