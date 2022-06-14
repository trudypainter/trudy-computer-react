import "./SpotifyResults.css";

const SpotifyResults = (props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="spotifyPage">
      <div className="spotifyText">
        <h1 class="text-salmon">Spotify Implicit Grant Template</h1>
        <h3>
          This app uses implicit grant authorization flow to authenticate users
          and get user data.
        </h3>
        <p>
          Here are your top artists on Spotify:
          <ol id="top-artists"></ol>
        </p>
      </div>
    </div>
  );
};

export default SpotifyResults;
