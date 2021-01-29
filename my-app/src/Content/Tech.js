import { technologies } from "../Data/technologies";
import './content.scss';

function Tech() {
  const list = technologies.map((tech) => {
    let sourceImg = require('../logos/' + tech.id + '.png');
    console.log(sourceImg)
    return (
      <li key={tech.name}>
        <img width='50' src={sourceImg.default}></img>
        <h5 >{tech.name}</h5>
      </li>
    );
  });

  return (
    <div>
      <h1>Technologies</h1>
      <ul className="technologies">{list}</ul>
    </div>
  );
}

export default Tech;
