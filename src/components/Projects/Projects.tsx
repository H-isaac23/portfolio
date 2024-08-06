import React, { useState } from "react";
import "./project.css";
import { Solo, Pvp, MainMenu } from "../../assets/codewars";
import { Events, Fines, Scan } from "../../assets/qrca";
import { Intro, Streams, Tweets } from "../../assets/vupdates";
import { About, Activities, Home } from "../../assets/tbr";

interface Project {
  url: string;
  name: string;
  description: string;
  images: string[];
  category: string[];
  technologies: string[];
}

const Projects = () => {
  const data: Project[] = [
    {
      url: "https://github.com/H-isaac23/CodeWars",
      name: "CodeWars",
      description:
        "CodeWars is a multiplayer game where players battle by submitting correct code faster than their opponents. Each correct submission reduces the opponent's health, and the first player to bring the other’s health to zero wins.",
      images: [Solo, Pvp, MainMenu],
      category: ["Frontend", "Backend"],
      technologies: ["ReactJS", "SocketIO", "Express", "MongoDB"],
    },
    {
      url: "https://github.com/orgs/qrca/repositories",
      name: "QR Attendance",
      description:
        "The QR Attendance App streamlines event attendance at universities by using QR codes. Students receive unique QR IDs, which they scan at events to instantly record their attendance, making the process faster and more efficient.",
      images: [Events, Fines, Scan],
      category: ["Frontend", "Backend"],
      technologies: ["Ionic React", "Express", "MongoDB"],
    },
    {
      url: "https://github.com/H-isaac23/V-Updates",
      name: "V-Updates",
      description:
        "V-Updates automates the collection and display of tweets, providing a centralized platform for fans to stay updated on their favorite creators. ",
      images: [Tweets, Intro, Streams],
      category: ["Frontend", "Backend"],
      technologies: ["ReactJS", "Express", "MongoDB"],
    },
    {
      url: "https://github.com/H-isaac23/Delgado-midtermproj",
      name: "PalaWonders",
      description:
        "PalaWonders is a tourism promotion page dedicated to showcasing the best of Palawan. Explore stunning attractions, delicious local cuisine, and exciting activities, all curated to highlight why Palawan is a must-visit destination.",
      images: [Activities, About, Home],
      category: ["UI Design"],
      technologies: ["HTML", "Pure CSS", "No Javascript"],
    },
  ];

  const [active, setActive] = useState<number>(0);

  const onProjectClick = (i: number) => {
    setActive(i);
  };

  return (
    <div className="projects">
      <div className="project-titles">
        {data.map((project: Project, idx: number) => (
          <h3
            className={
              idx === active ? "project-title title-active" : "project-title"
            }
            key={idx}
            onClick={() => onProjectClick(idx)}
          >
            {project.name}
          </h3>
        ))}
      </div>
      <div className="project-section">
        <ProjectItem projectItem={data[active]} />
      </div>
    </div>
  );
};

const ProjectItem = ({ projectItem }: { projectItem: Project }) => {
  return (
    <>
      <div className="left-section">
        <div className="project-data">
          <table className="category-table">
            <tbody>
              <tr className="category-row">
                <td className="category-label">Category</td>
                <td className="category-items">
                  {projectItem.category.map((c: string) => (
                    <div>{c}</div>
                  ))}
                </td>
              </tr>
              <tr>
                <td className="category-label">Technologies</td>
                <td className="category-items">
                  {projectItem.technologies.map((t: string) => (
                    <div>{t}</div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="project-details">
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
              key={image}
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
