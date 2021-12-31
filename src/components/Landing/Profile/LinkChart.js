import "./LinkChart.css";

const LinkChart = () => {
  return (
    <div className="linkChart">
      <div className="topBar"></div>
      <div className="leftBar"></div>

      <div className="essential">Essential</div>
      <div className="peripheral">Peripheral</div>
      <div className="professional">Professional</div>
      <div className="personal">Personal</div>

      <a
        target="blank"
        href="https://docs.google.com/spreadsheets/d/1pBokIjBV7lxDYNxqqxfLrNb7h3h4GuhWSbrrTGd9Fho/edit?usp=sharing"
        className="inside_graph resume"
      >
        Resume
      </a>
      <a
        target="blank"
        href="https://www.are.na/trudy-painter"
        className="inside_graph arena"
      >
        Are.na
      </a>
      <a
        target="blank"
        href="https://vsco.co/bionicpinkytoe/gallery"
        className="inside_graph vsco"
      >
        VSCO
      </a>
      <a
        target="blank"
        href="https://open.spotify.com/user/trudypaintet?si=ZlW6diDKSl61x9oKhit5BA"
        className="inside_graph spotify"
      >
        Spotify
      </a>
      <a
        target="blank"
        href="https://github.com/trudypainter"
        className="inside_graph github"
      >
        Github
      </a>
      <a
        target="blank"
        href="https://www.linkedin.com/in/trudy-painter/"
        className="inside_graph linkedin"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default LinkChart;
