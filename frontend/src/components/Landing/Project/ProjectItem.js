import "./ProjectItem.css";
import TagButton from "./TagButton";

const ProjectItem = (props) => {
  return (
    <div className="projectItem">
      <div className="projectTitle">{props.project.title}</div>
      <div className="subtitle">
        {props.project.year + ", " + props.project.location}
      </div>
      <div className="description">{props.project.description}</div>

      <div className="thumbnail">
        <img className="thumbImg" src={props.project.image}></img>
      </div>

      <div className="tags">
        {props.project.tags != undefined &&
          props.project.tags.map((tag) => (
            <TagButton tag={tag} color={"blue"}></TagButton>
          ))}
      </div>

      <a href={props.project.url} className="more">
        MORE +
      </a>
    </div>
  );
};

export default ProjectItem;
