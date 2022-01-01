import "./ArenaHighlight.css";

const ArenaHighlight = () => {
  return (
    <div className="arenaHighlight">
      <div className="arenaTitle">Are.na Channels to Check Out</div>
      <div className="channelList">
        <div className="channel">
          <a
            className="channelLink"
            target="blank"
            href="https://www.are.na/trudy-painter/things-i-like-po-qx_gzvgo"
          >
            {" "}
            things i like🧚‍♀️🧦
          </a>
        </div>
        <div className="channel">
          <a
            className="channelLink"
            target="blank"
            href="https://www.are.na/trudy-painter/future-archives-5r6djwjpaj4"
          >
            {" "}
            future archives 📚
          </a>
        </div>
        <div className="channel">
          <a
            className="channelLink"
            target="blank"
            href="https://www.are.na/trudy-painter/cool-websites-76fmswj_ug8"
          >
            {" "}
            cool websites🕹
          </a>
        </div>
        <div className="channel">
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
    </div>
  );
};

export default ArenaHighlight;
