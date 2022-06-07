import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";

const baseURL = "http://0.0.0.0:5000";
// const baseURL = "";

console.log("fetching project list");
fetch(baseURL + "/api/project_url_list")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    ReactDOM.render(
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage baseURL={baseURL} />} />
          {response.data.map((url) => (
            <Route
              path={url}
              element={<ProjectPage projectUrl={url} baseURL={baseURL} />}
            />
          ))}
        </Routes>
      </Router>,
      document.getElementById("root")
    );
  });
