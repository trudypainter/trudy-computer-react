import "./ProjectBox.css";
import ProjectItem from "./Project/ProjectItem";
import React, { useEffect, useState } from "react";

const ProjectBox = () => {
  const [projects, updateProjects] = useState([]);
  useEffect(() => {
    fetch("/api/landing")
      .then((response) => response.json())
      .then((response) => {
        updateProjects(response.data);
      });
  }, []);

  // const projects = [
  //   {
  //     title: "test1",
  //     location: "blank",
  //     year: "year",
  //     description: "description",
  //     url: "/test-project-1",
  //     image: "blank",
  //     description: "test description",
  //     tags: ["tag 1", "tag two"],
  //   },
  //   {
  //     title: "test2",
  //     location: "blank",
  //     year: "year",
  //     description: "description",
  //     image: "blank",
  //     url: "/test-project-2",
  //     description: "test description",
  //     tags: ["tag 1", "tag two"],
  //   },
  // ];

  return (
    <div className="projectBox">
      {projects.map((projectInfo) => (
        <ProjectItem project={projectInfo} />
      ))}
    </div>
  );
};

export default ProjectBox;
