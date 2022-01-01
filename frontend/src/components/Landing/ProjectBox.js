import "./ProjectBox.css";
import ProjectItem from "./Project/ProjectItem";
import React, { useEffect, useState } from "react";

const ProjectBox = () => {
  // const [projects, updateProjects] = useState([]);
  // useEffect(() => {
  //   fetch("/api/landing")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       updateProjects(response.data);
  //     });
  // }, []);

  const projects = [
    {
      title: "test1",
      location: "blank",
      year: "year",
      description: "description",
      image:
        "https://raw.githubusercontent.com/trudypainter/trudy-computer-react/main/projects/real-talk-radio/rtroverview.jpg",
      url: "blank",
      description: "test description",
      tags: ["tag 1", "tag two"],
    },
    {
      title: "test2",
      location: "blank",
      year: "year",
      description: "description",
      url: "blank",
      image:
        "https://github.com/trudypainter/trudy-computer-react/blob/main/projects/spotify-monster/FINAL_WRITEUP/images/overview.jpeg?raw=true",
      description: "test description",
      tags: ["tag 1", "tag two"],
    },
  ];

  return (
    <div className="projectBox">
      {projects.map((projectInfo) => (
        <ProjectItem project={projectInfo} />
      ))}
    </div>
  );
};

export default ProjectBox;
