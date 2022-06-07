import "./ProjectBox.css";
import ProjectItem from "./Project/ProjectItem";
import React, { useEffect, useState } from "react";
import ProjectRow from "./Project/ProjectRow";
import FilterBar from "./Project/FilterBar";

const ProjectBox = (props) => {
  const [projects, updateProjects] = useState({
    data: [],
    locations: [],
    topics: [],
  });

  const [selectedProjects, setSelectedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [locations, setLocations] = useState([]);
  const [topics, setTopics] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetch(props.baseURL + "/api/landing")
      .then((response) => response.json())
      .then((response) => {
        updateProjects(response);

        // parse all JSON obj
        let parsedProj = response.data.map((jsonStr) => {
          let ogParse = JSON.parse(jsonStr);
          ogParse.location = JSON.parse(ogParse.location);
          ogParse.tags = ogParse.tags.map((tag) => JSON.parse(tag));
          return ogParse;
        });
        let parsedLoc = response.locations.map((jsonStr) =>
          JSON.parse(jsonStr)
        );
        let parsedTopics = response.topics.map((jsonStr) =>
          JSON.parse(jsonStr)
        );

        // update (selected is a copy)
        setSelectedProjects([...parsedProj]);
        setAllProjects(parsedProj);
        setLocations(parsedLoc);
        setTopics(parsedTopics);
      });
  }, []);

  // list of strings of jsons
  console.log("🐸 selected projects @ projectBox", selectedProjects);
  return (
    <div className="projectBox">
      <FilterBar
        locations={locations}
        topics={topics}
        allProjects={allProjects}
        selectedProjects={selectedProjects}
        setSelectedProjects={setSelectedProjects}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      ></FilterBar>
      {selectedProjects.map((projectInfo) => (
        <ProjectRow project={projectInfo} />
      ))}
    </div>
  );
};

export default ProjectBox;
