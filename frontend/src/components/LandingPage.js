import "./LandingPage.css";
import ProfileBox from "./Landing/ProfileBox";
import ProjectBox from "./Landing/ProjectBox";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <ProfileBox />
      <ProjectBox />
    </div>
  );
};

export default LandingPage;
