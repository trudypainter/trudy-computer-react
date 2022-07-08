import "./ArenaHighlight.css";

const ArenaHighlight = () => {
  return (
    <div className="arenaHighlight">
      <div className="arenaTitle">Some of My Are.na Channels</div>
      <div className="channelList">
        <a
          className="channelLink"
          target="blank"
          href="https://www.are.na/trudy-painter/things-i-like-eruhck1o7r0"
        >
          {" "}
          things i like🧚‍♀️🧦
        </a>
        <a
          className="channelLink"
          target="blank"
          href="https://www.are.na/trudy-painter/future-archives-8xltbdet6ck"
        >
          {" "}
          future archives 📚
        </a>
        <a
          className="channelLink"
          target="blank"
          href="https://www.are.na/trudy-painter/cool-websites-yj6tfjbuhp8"
        >
          {" "}
          cool websites🕹
        </a>
        <a
          className="channelLink"
          target="blank"
          href="https://www.are.na/trudy-painter/zines-for-breakfast"
        >
          {" "}
          zines for breakfast📒
        </a>
      </div>
    </div>
  );
};

export default ArenaHighlight;
