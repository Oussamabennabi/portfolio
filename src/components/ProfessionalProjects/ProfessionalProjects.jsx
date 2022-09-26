import "./professionalProjects.css"
import { professionalProjects as projects } from "../../data";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Bounce } from "react-reveal";
import CoolText from "../ui/CoolText"
const ProfessionalProjects = () => {
  return (
    <section
      id="professionalProjects"
      className="professionalProjects container"
    >
      <Bounce bottom>
        <div className="content">
          <h2 className="section-header">
          <span className="link-number">02. </span>
          <CoolText text={"Professional Projects."} />

          </h2>
          <div className="pro-projects-container content">
            {projects.map((p, i) => (
              <ProjectCard pro={true} project={p} key={i} />
            ))}
          </div>
        </div>
      </Bounce>
    </section>
  );
}

export default ProfessionalProjects