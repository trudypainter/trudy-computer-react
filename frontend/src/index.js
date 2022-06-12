import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";
import EmailPage from "./components/EmailPage";
import EmailConfirmation from "./components/EmailConfirmation";

// const baseURL = "http://127.0.0.1:5000";
const baseURL = "";

console.log("fetching project list");
fetch(baseURL + "/api/project_url_list")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    ReactDOM.render(
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage baseURL={baseURL} />} />
          <Route path="/email" element={<EmailPage baseURL={baseURL} />} />
          <Route
            path="/emailresponse"
            element={<EmailConfirmation baseURL={baseURL} />}
          />

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
