import React from "react";
import { Helmet } from "react-helmet";

function Metatags() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daniela Lins</title>
        <meta
          name="description"
          content="Portfolio Website for the Web Developer, Daniela Lins"
        ></meta>
        <meta keywords="Daniela Lins, Portifolio, Full Stack Web Development, Frontend, Backend, HTML, CSS, JavaScript, Node, React, Mongo, Job Seeking"></meta>
        <meta name="author" content="Daniela Lins"></meta>
        <link rel="canonical" href="https://portifolio.danielalins.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </meta>
      </Helmet>
    </div>
  );
}

export default Metatags;
