import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";
import EmailPage from "./components/EmailPage";
import SpotifyPage from "./components/SpotifyPage";
import EmailConfirmation from "./components/EmailConfirmation";
import SpotifyResults from "./components/SpotifyResults";

// const baseURL = "http://0.0.0.0:5000";
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
          <Route path="/connect" element={<SpotifyPage baseURL={baseURL} />} />
          <Route
            path="/results"
            element={<SpotifyResults baseURL={baseURL} />}
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
