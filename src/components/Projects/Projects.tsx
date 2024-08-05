import React from "react";
import "./project.css";
import { Solo, Pvp, MainMenu } from "../../assets/codewars";

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
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tempora iste, aperiam dicta deserunt quisquam atque necessitatibus numquam, nostrum fugit voluptas unde. Minus nobis non ratione nisi, similique autem fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tempora iste, aperiam dicta deserunt quisquam atque necessitatibus numquam, nostrum fugit voluptas unde. Minus nobis non ratione nisi, similique autem fugiat?",
    },
  ];

  return (
    <div className="projects">
      <div className="project-titles">
        {data.map((project: Project, idx: number) => (
          <h3 key={idx}>{project.name}</h3>
        ))}
      </div>
      <div className="project-section">
        <div className="left-section">
          <div className="project-details">
            <span className="description-text">Description:</span>
            <p className="project-description">{data[2].description}</p>
          </div>
        </div>
        <div className="right-section">
          <img
            className="project-image image-1"
            src={Solo}
            alt="Solo Play image"
          />
          <img
            className="project-image image-2"
            src={MainMenu}
            alt="Main menu image"
          />
          <img className="project-image image-3" src={Pvp} alt="PVP image" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
