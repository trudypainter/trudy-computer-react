import "./ProjectBox.css";
import ProjectItem from "./Project/ProjectItem";
import React, { useEffect, useState } from "react";

const ProjectBox = (props) => {
  const [projects, updateProjects] = useState([]);
  useEffect(() => {
    fetch(props.baseURL + "/api/landing")
      .then((response) => response.json())
      .then((response) => {
        updateProjects(response.data);
      });
  }, []);

  return (
    <div className="projectBox">
      {projects.map((projectInfo) => (
        <ProjectItem project={JSON.parse(projectInfo)} />
      ))}
    </div>
  );
};

export default ProjectBox;
