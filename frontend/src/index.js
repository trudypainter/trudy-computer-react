import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";

// console.log("fetching project list");
// fetch("/api/project_url_list")
//   .then((response) => response.json())
//   .then((response) => {
//     ReactDOM.render(
//       <Router>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           {response.data.map((url) => (
//             <Route path={url} element={<ProjectPage projectUrl={url} />} />
//           ))}
//         </Routes>
//       </Router>,
//       document.getElementById("root")
//     );
//   });

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/test-project-1"
        element={<ProjectPage projectUrl="/test-project-1" />}
      />
    </Routes>
  </Router>,
  document.getElementById("root")
);
