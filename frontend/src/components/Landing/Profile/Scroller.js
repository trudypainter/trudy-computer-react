import "./Scroller.css";
import Marquee from "react-fast-marquee";

const Scroller = () => {
  const one = " 🎧Songs Listened To Today: 30";
  const two = " 💻Tabs Opened Today: 30";
  const three = " 🌤My Current Weather: 70 and Sunny";
  const four = " 👟Did I Run Today: Yes";
  const five = " 🌐Site Vists Total: 300   ";

  const scrollerList = [one, two, three, four, five];

  return (
    <Marquee
      gradientWidth="0"
      gradient="false"
      pauseOnHover="true"
      className="scroller"
    >
      {scrollerList.map((item) => item)}
    </Marquee>
  );
};

export default Scroller;
