import "./ProfileBox.css";
import MeBox from "./Profile/MeBox";
import LinkChart from "./Profile/LinkChart";
import ArenaHighlight from "./Profile/ArenaHighlight";
import Scroller from "./Profile/Scroller";
import Bio from "./Profile/Bio";

const ProfileBox = () => {
  return (
    <div className="profileBox">
      <MeBox />
      <LinkChart />
      <ArenaHighlight />
      <Scroller />
      <Bio />
    </div>
  );
};

export default ProfileBox;
