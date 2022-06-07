import "./ProjectRow.css";
import TagButton from "./TagButton";

const ProjectRow = (props) => {
  return (
    <div className="projectRowContainer">
      <div className="projectRow">
        <div className="projectTitle">{props.project.title}</div>
        <div className="description">{props.project.description}</div>

        <div className="tags">
          <TagButton tag={props.project.location} filterBar={false}></TagButton>

          {props.project.tags != undefined &&
            props.project.tags.map((tag) => (
              <TagButton tag={tag} filterBar={false}></TagButton>
            ))}
        </div>
        <a href={props.project.url} className="more">
          MORE +
        </a>
      </div>
    </div>
  );
};

export default ProjectRow;
