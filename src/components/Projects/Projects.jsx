import "./projects.css";
import { projects } from "../../data";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Bounce } from "react-reveal";
import CoolText from "../ui/CoolText";
const Projects = () => {
  return (
    <section id="projects" className="container projects">
      <Bounce bottom>
        <div className="content">
          <h2 className="section-header">
            <span className="link-number">03. </span>
            <CoolText text={"Simple Projects."} />
          </h2>

          <div className="content projects-container">
            {projects.map((p, i) => (
              <ProjectCard project={p} key={i} />
            ))}
          </div>
        </div>
      </Bounce>
    </section>
  );
};

export default Projects;
