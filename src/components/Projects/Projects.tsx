import React from "react";

interface Project {
  url: string;
  name: string;
  description: string;
}

const Projects = () => {
  const data: Project[] = [
    {
      url: "",
      name: "CodeWars",
      description: "Project description",
    },
    {
      url: "",
      name: "CodeWars",
      description: "Project description",
    },
    {
      url: "",
      name: "CodeWars",
      description: "Project description",
    },
  ];

  return (
    <div className="projects">
      <div className="project-header">Projects</div>
      <div className="projects-left">
        <ul>
          {data.map((project: Project, idx: number) => (
            <li key={idx}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.url}>Link</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="projects-right"></div>
    </div>
  );
};

export default Projects;
