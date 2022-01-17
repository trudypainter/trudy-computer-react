import "./MarkdownContent.css";
import { useEffect, useState } from "react";
import Parser from "html-react-parser";

const MarkdownContent = (props) => {
  const [markdownContent, updateMarkdownContent] = useState("");

  console.log(props.baseURL + "FETCHING FOR md content", props.projectUrl);
  useEffect(() => {
    fetch("/api/" + props.projectUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.markdown);
        updateMarkdownContent(response.markdown);
      });
  }, []);

  return <div className="markdownContent">{Parser(markdownContent)}</div>;
};

export default MarkdownContent;
