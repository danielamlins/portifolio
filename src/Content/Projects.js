import { projects } from "../Data/projects_list";
import "./projects.scss";

function Projects() {
  const mappedProjects = projects.map((proj) => {
    let img = require("../Imgs/" + proj.id + ".png");
    return (
      <li className="project" id={proj.id}>
        <a key={proj.name} href={proj.link} target="_blank">
          <img src={img.default} />
          <div className="card-txt">
            <h4 className="project-name">{proj.name}</h4>
            <p className="project-content">{proj.description}</p>
            {proj.topics && (<ul>{proj.topics.map((el) => (<li>{el}</li>))}</ul>)}
          </div>
        </a>
      </li>
    );
  });
  return (
    <div>
      <h2>Projects</h2>
      <ul className="projects" key="projectList">
        {mappedProjects}
      </ul>
    </div>
  );
}
export default Projects;
