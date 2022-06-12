import "./ArenaHighlight.css";

const ArenaHighlight = () => {
  return (
    <div className="arenaHighlight">
      <div className="arenaTitle">Some of My Are.na Channels</div>
      <div className="channelList">
        <a
          className="channelLink"
          target="blank"
          href="https://www.are.na/trudy-painter/things-i-like-po-qx_gzvgo"
        >
          {" "}
          things i like🧚‍♀️🧦
        </a>
        <a
          className="channelLink"
          target="blank"
          href="https://www.are.na/trudy-painter/future-archives-5r6djwjpaj4"
        >
          {" "}
          future archives 📚
        </a>
        <a
          className="channelLink"
          target="blank"
          href="https://www.are.na/trudy-painter/cool-websites-76fmswj_ug8"
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
