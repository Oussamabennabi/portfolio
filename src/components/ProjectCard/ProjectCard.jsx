import React from 'react'
import { FaRegFolder, FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import "./projectCard.css"
const ProjectCard = ({ project, pro }) => {
  return (
    <article tabIndex={0} className={`project-card ${pro && "pro"}`}>
      <div className="header">
        <div className="icons">
          <button tabIndex={-1}>
            <FaRegFolder className="file" />
          </button>
          <div>
            <a  tabIndex={-1} href={project.github} target="_blank" rel="noreferrer">
              <FaGithubAlt className="github" />
            </a>
            {project.hosted ? (
              <a tabIndex={-1} href={project.hosted} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="external-link" />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div  className="title">
          <a  tabIndex={-1} target="_blank" rel="noreferrer" href={project.hosted ? project.hosted : ""}>{project.title}
          </a>
        </div>
        <div className="body">{project.desc}</div>
      </div>
      <div className="footer ">
        <ul className="">
          {project.tools.map((tool, k) => (
            <li className="tool code-font" key={k}>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard