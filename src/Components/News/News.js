import background from "../../assets/images/carou_img_1.png";
import newsStyle from "./newsStyle.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function News() {
  const { ref, inView } = useInView({
    threshold:0.4
  });
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.5,
        },
      });
      animationRight.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      animationLeft.start({
        opacity: 0,
        x: "-50vw",
      });
      animationRight.start({
        opacity: 0, 
        x: "50vw",
      });
    }
    // console.log("use effecthook, inView =", inView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section ref={ref} id="news">
      <div className={newsStyle["container"]}>
        <div className="text-center pt-5 text-light">
          <h2>NEWS</h2>
        </div>
        <motion.div className={newsStyle["content"]}>
          <motion.div className={newsStyle["imageDiv"]} animate={animationLeft}>
            <img src={background} alt="background png" />
          </motion.div>
          <motion.div
            className={newsStyle["content-text"]}
            animate={animationRight}
          >
            <p>
              Examination will start 14th June 20 March 2022 *discord and slack
              channels members will enter exam for improving positions 03.20.22
              each three months *our team announce to you we are going to create
              one more nft collection for designers... 16 March 2022 *we will
              meet in north macedonia for having fun and introducing *our
              partnership coltra will describe us !! ...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default News;
