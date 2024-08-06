import React from "react";
import "./project.css";
import { Solo, Pvp, MainMenu } from "../../assets/codewars";
import { Events, Fines, Scan } from "../../assets/qrca";
import { Intro, Streams, Tweets } from "../../assets/vupdates";

interface Project {
  url: string;
  name: string;
  description: string;
  images: string[];
}

const Projects = () => {
  const data: Project[] = [
    {
      url: "https://github.com/H-isaac23/CodeWars",
      name: "CodeWars",
      description: "Project description",
      images: [Solo, Pvp, MainMenu],
    },
    {
      url: "https://github.com/orgs/qrca/repositories",
      name: "QR Attendance",
      description: "Project description",
      images: [Events, Fines, Scan],
    },
    {
      url: "",
      name: "CodeWars",
      description: "Project description",
      images: [Tweets, Intro, Streams],
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
        <ProjectItem projectItem={data[1]} />
      </div>
    </div>
  );
};

const ProjectItem = ({ projectItem }: { projectItem: Project }) => {
  return (
    <>
      <div className="left-section">
        <div className="project-details">
          <span className="description-text">Description:</span>
          <p className="project-description">{projectItem.description}</p>
        </div>
      </div>
      <div className="right-section">
        {projectItem.images.map((image: string, idx: number) => {
          return (
            <img
              className={
                projectItem.name !== "QR Attendance"
                  ? `project-image image-${idx + 1}`
                  : `qr-project-image qr-image-${idx + 1}`
              }
              src={image}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
