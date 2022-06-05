import "./ProfileBox.css";
import MeBox from "./Profile/MeBox";
import LinkChart from "./Profile/LinkChart";
import ArenaHighlight from "./Profile/ArenaHighlight";
import Scroller from "./Profile/Scroller";
import Bio from "./Profile/Bio";
import { attributesToProps } from "html-react-parser";

const ProfileBox = (props) => {
  return (
    <div className="profileBox">
      <MeBox />
      <LinkChart />
      <ArenaHighlight />
      <Scroller baseURL={props.baseURL} />
      <Bio />
    </div>
  );
};

export default ProfileBox;
