import Carousel from "react-spring-3d-carousel";
import { useEffect, useState } from "react";
import { config } from "react-spring";
import teamStyle from "../Style/teamStyle.module.scss";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [offsetRadius, setOffsetRadius] = useState(3);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setOffsetRadius(1);
    } else if (window.innerWidth < 1240) {
      setOffsetRadius(2);
    } else {
      setOffsetRadius(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;
    console.log(xUp);
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(goToSlide + 1);
      } else {
        /* right swipe */
        setGoToSlide(goToSlide - 1);
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <>
      <main
        className={teamStyle["carousel"]}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </main>
      <article className={teamStyle.article}>
        <h2>{props.cards[goToSlide].content.props.name}</h2>
        <h3>{props.cards[goToSlide].content.props.role}</h3>
        {/* <h4>{props.cards[goToSlide].content.props.social}</h4> */}
        <div className={teamStyle["links"]}>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
          {/* <i className="fa-solid fa-envelope"></i> */}
        </div>
      </article>
    </>
  );
}

// useEffect(() => {
//   setOffsetRadius(props.offset);
// }, [props.offset]);
