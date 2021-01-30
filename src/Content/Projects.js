import { projects } from "../Data/projects_list";
import "./content.scss";

function Projects() {
  const mappedProjects = projects.map((proj) => {
    return (
      <li className="project">
        <a key={proj.name} href="#">
          <h4 className="project-name">{proj.name}</h4>
          <p className="project-content">{proj.description}</p>
          {proj.topics && <ul>{proj.topics.map(el => <li>{el}</li>)}</ul>}
        </a>
      </li>
    );
  });
  return (
    <div>
      <h1>Projects</h1>
      <ul className="projects" key="projectList">{mappedProjects}</ul>
    </div>
  );
}
export default Projects;
