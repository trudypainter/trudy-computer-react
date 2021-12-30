import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<ProjectPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
