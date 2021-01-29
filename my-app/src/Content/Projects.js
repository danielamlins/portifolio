import { projects } from '../Data/projects_list';

function Projects(){
    const mappedProjects = projects.map(proj=> {
        return <li key={proj.name}>{proj.name}</li>
    });
    return(
        <ul key="projectList">{mappedProjects}</ul>
    );
}
export default Projects;