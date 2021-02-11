import { technologies } from "../Data/technologies";
import "./tech.scss";


function Tech() {
  let CVEn = require("../Data/LinsAraujoCV_En.png");
  let CVDe = require("../Data/LinsAraujoCV_De.png");

  const list = technologies.map((tech) => {
    let sourceImg = require("../Imgs/" + tech.id + ".png");
    console.log(sourceImg);
    return (
      <li key={tech.name}>
        <img width="50" src={sourceImg.default}></img>
        <h5>{tech.name}</h5>
      </li>
    );
  });

  return (
    <div>
      <h2>Technologies</h2>
      <ul className="technologies">{list}</ul>

      <h2>CV</h2>
      <ul className="CV">
        <li className="curriculum">
          <a href="https://bit.ly/3coQnrG" target="_blank">
            <img src={CVEn.default} />
            <p>English Version</p>
          </a>
        </li>

        <li className="curriculum">
          <a href="https://bit.ly/3coERfS" target="_blank">
            <img src={CVDe.default} />
            <p>German Version</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tech;
