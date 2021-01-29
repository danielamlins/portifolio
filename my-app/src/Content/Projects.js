import { projects } from "../Data/projects_list";
import './content.scss';


function Projects() {
  const mappedProjects = projects.map((proj) => {
    return <li key={proj.name}>{proj.name}</li>;
  });
  return (
    <div>
      <h1>Projects</h1>
      <ul key="projectList">{mappedProjects}</ul>
    </div>
  );
}
export default Projects;
