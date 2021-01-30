import React, { useState } from "react";
import "./content.scss";


function Curriculum() {
  let CVEn = require('../Data/LinsAraujoCV_En.png');
  let CVDe = require('../Data/LinsAraujoCV_De.png');

  return (
    <div>
      <h2>CV</h2>
      <ul className="CV">
         
        <li className="curriculum"><a href="https://bit.ly/3coQnrG" target="_blank">
          <img src={CVEn.default} />
        </a></li>
              
        <li className="curriculum"><a href="https://bit.ly/3coERfS" target="_blank">
          <img src={CVDe.default} />
        </a></li>
      </ul>
    </div>
  );
}

export default Curriculum;
