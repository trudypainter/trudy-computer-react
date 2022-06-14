import "./SpotifyResults.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const SpotifyResults = (props) => {
  return (
    <div className="spotifyPage">
      <Helmet>
        <script
          src={process.env.PUBLIC_URL + "/spotifyAuth.js"}
          type="text/javascript"
          defer
        ></script>
      </Helmet>
      <div className="spotifyText">
        <div>
          We both listen to
          <div className="top-artists" id="top-artists">
            Loading...
          </div>
        </div>
        <div className="buttonContainer">
          <a href="/" className="backButton">
            HOME
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotifyResults;
