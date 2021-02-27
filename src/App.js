import React, { useState, useRef, useEffect } from "react";
import "./App.scss";
import Metatags from "./Meta/Metatags";
import Hero from "./Hero/Hero";
import { Burger, Menu } from "./Nav/Nav";
import Sidemenu from "./Sidemenu/Sidemenu";
import Footer from "./Footer/Footer";
import About from "./Content/About";
import Tech from "./Content/Tech";
import Projects from "./Content/Projects";
import Contact from "./Content/Contact";
import Privacy from "./Content/Privacy";
import Impressum from "./Content/Impressum";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function App() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const defaultContainer = () => (
    <div className="container">
      {isMobile && (
        <div>
          <Burger open={open} setOpen={setOpen} />{" "}
          <Menu open={open} setOpen={setOpen} />
        </div>
      )}
      <Hero />
      <div className="main">
        {!isMobile ? <Sidemenu /> : null}

        <div className="content">
          <Route path="/" exact component={About} />
          <Route path="/tech" component={Tech} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <BrowserRouter>
      <Metatags />
      <Switch>
      <Route exact path="/Privacy" component={Privacy}/>
      <Route exact path="/Impressum" component={Impressum}/>

      <Route component={defaultContainer}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
