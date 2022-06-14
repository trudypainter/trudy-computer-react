import "./SpotifyPage.css";
import ProfileBox from "./Landing/ProfileBox";
import ProjectBox from "./Landing/ProjectBox";
import EmailBox from "./Landing/EmailBox";

const SpotifyPage = (props) => {
  return (
    <div className="spotifyPage">
      <div className="spotifyText">
        Click below to see what Spotify artists we both listen to.
        <div className="spotifyContainer">
          <a href="/results" className="spotifySubmit">
            Let's go
          </a>
        </div>
        <div className="spotifyContainer">
          <a href="/" className="backButton">
            back
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPage;
