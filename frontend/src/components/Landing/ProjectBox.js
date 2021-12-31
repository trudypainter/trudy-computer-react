import "./ProjectBox.css";
import ProjectItem from "./Project/ProjectItem";
import React, { useEffect, useState } from "react";

const ProjectBox = () => {
  const [projects, updateProjects] = useState([]);

  useEffect(() => {
    console.log("FETCHING");
    fetch("/api/landing")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        updateProjects(response.data);
      });
  }, []);

  return (
    <div className="projectBox">
      {projects.map((projectInfo) => {
        <ProjectItem project={projectInfo} />;
      })}
    </div>
  );
};

export default ProjectBox;
