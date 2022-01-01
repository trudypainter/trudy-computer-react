import ContainerMenuBar from "./ContainerMenuBar";
import MarkdownContent from "./MarkdownContent";
import "./ProjectContainer.css";

const ProjectContainer = (props) => {
  return (
    <div className="projectContainer">
      <ContainerMenuBar projectUrl={props.projectUrl} />
      <MarkdownContent projectUrl={props.projectUrl} />
    </div>
  );
};

export default ProjectContainer;
