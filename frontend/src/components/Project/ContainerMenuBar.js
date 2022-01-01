import "./ContainerMenuBar.css";
import { useEffect, useState } from "react";

const ContainerMenuBar = (props) => {
  const [titleName, updateTitleName] = useState("");

  console.log("fetching for container bar");
  useEffect(() => {
    fetch("/api/" + props.projectUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.title);
        updateTitleName(response.title);
      });
  }, []);

  return (
    <div className="containerMenuBar">
      <div onClick={() => window.open("/", "_self")} className="exitButton">
        X
      </div>
      <div className="menuTitle">{titleName}</div>
    </div>
  );
};

export default ContainerMenuBar;
