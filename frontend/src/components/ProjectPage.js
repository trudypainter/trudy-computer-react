import "./ProjectPage.css";
import ProjectContainer from "./Project/ProjectContainter";

const ProjectPage = (props) => {
  console.log("PROJECT PAGE - ", props.projectUrl);
  return (
    <div className="projectPage">
      <ProjectContainer projectUrl={props.projectUrl} />
      <div onClick={() => window.open("/", "_self")} className="homeButton">
        HOME
      </div>
    </div>
  );
};

export default ProjectPage;
