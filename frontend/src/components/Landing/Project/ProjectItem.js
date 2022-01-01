import "./ProjectItem.css";

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
        {props.project.tags.map((tag) => (
          <span>{tag} </span>
        ))}
      </div>
      <div
        onClick={() => window.open(props.project.url, "_self")}
        className="more"
      >
        MORE +
      </div>
    </div>
  );
};

export default ProjectItem;
