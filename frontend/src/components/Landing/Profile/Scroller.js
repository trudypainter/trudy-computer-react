import "./Scroller.css";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const Scroller = (props) => {
  const [scrollerInfo, updateScrollerInfo] = useState();

  useEffect(() => {
    fetch(props.baseURL + "/api/scroller_info")
      .then((response) => response.json())
      .then((response) => {
        updateScrollerInfo(response.data);
      });
  }, []);

  return (
    <Marquee
      gradientWidth="0"
      gradient="false"
      pauseOnHover="true"
      className="scroller"
    >
      {scrollerInfo}
    </Marquee>
  );
};

export default Scroller;
