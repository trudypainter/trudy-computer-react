import "./LandingPage.css";
import ProfileBox from "./Landing/ProfileBox";
import ProjectBox from "./Landing/ProjectBox";
import EmailBox from "./Landing/EmailBox";
import MysteryBox from "./Landing/MysteryBox";

const LandingPage = (props) => {
  const bannerStyle = {
    height: "43px",
    width: "350px",
    border: "1px solid #000",
    position: "relative",
    visibility: "visible",
    padding: "0px",
    margin: "auto",
    "margin-top": "20px",
    "margin-bottom": "40px",
    transform: "translateX(calc(50vw - 175px))",
  };

  return (
    <div className="landingPage">
      <ProfileBox baseURL={props.baseURL} />
      <MysteryBox baseURL={props.baseURL} />
      <ProjectBox baseURL={props.baseURL} />
      <a target="_blank" href="https://gossipsweb.net">
        <img
          src="https://gossipsweb.net/images/twwmwh-lime.jpg"
          alt="This website was made with hands."
          style={bannerStyle}
        />
      </a>
    </div>
  );
};

export default LandingPage;
