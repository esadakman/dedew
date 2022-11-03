import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import teamStyle from "../Style/teamStyle.module.scss";

function Card({ image }) {
  const [show, setShown] = useState(false);
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <>
      

      <section className={teamStyle.container}>
        <animated.div
          className={teamStyle.card}
          style={props3}
          onMouseEnter={() => setShown(true)}
          onMouseLeave={() => setShown(false)}
        >
          <img src={image} alt="pp" className={teamStyle.imgs} />
        </animated.div>
      </section>
    </>
  );
}

export default Card;
