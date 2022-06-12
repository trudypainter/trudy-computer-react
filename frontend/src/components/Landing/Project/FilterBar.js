import "./FilterBar.css";
import TagButton from "./TagButton";
import { useEffect } from "react";
import { filter } from "htmlparser2/node_modules/domutils";

const FilterBar = (props) => {
  console.log("✅ selected projects", props.selectedProjects);
  const handleScroll = () => {
    const filterBar = document.getElementById("filterBar");
    const position = filterBar.offsetTop - 25;
    if (window.pageYOffset >= position) {
      filterBar.classList.add("sticky");
    } else {
      filterBar.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="filterBar" className="filterBar">
      <div className="tagsBar">
        <div className="locationTitle">Type:</div>

        {props.locations != undefined &&
          props.locations.map((tag) => (
            <TagButton
              tag={tag}
              allProjects={props.allProjects}
              filterBar={true}
              selectedProjects={props.selectedProjects}
              setSelectedProjects={props.setSelectedProjects}
              selectedTags={props.selectedTags}
              setSelectedTags={props.setSelectedTags}
            ></TagButton>
          ))}
      </div>
      <div className="tagsBar">
        <div className="locationTitle">Topics:</div>
        {props.topics != undefined &&
          props.topics.map((tag) => (
            <TagButton
              tag={tag}
              allProjects={props.allProjects}
              filterBar={true}
              selectedProjects={props.selectedProjects}
              setSelectedProjects={props.setSelectedProjects}
              selectedTags={props.selectedTags}
              setSelectedTags={props.setSelectedTags}
            ></TagButton>
          ))}
      </div>
    </div>
  );
};

export default FilterBar;
