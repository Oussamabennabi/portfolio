import React from 'react'
import { FaRegFolder, FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import "./projectCard.css"
const ProjectCard = ({ project, pro }) => {
  return (
    <article className={`project-card ${pro&&"pro"}`}>
      <div className="header">
        <div className="icons">
          <button>
            <FaRegFolder className="file" />
          </button>
          <div>
            <a href={project.github} target="_blank" rel="noreferrer">
              <FaGithubAlt className="github" />
            </a>
            {project.hosted ? (
              <a href={project.hosted} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="external-link" />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="title">{project.title}</div>
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