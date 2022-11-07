import background from "../../assets/images/carou_img_1.png";
import newsStyle from "./newsStyle.module.scss";
import { motion } from "framer-motion";

function News() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };
  return (
    <section id="news">
      <div className={newsStyle["container"]}>
        <div className="text-center pt-5 text-light">
          <h2>NEWS</h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className={newsStyle["content"]}
        >
          <motion.div variants={item} className={newsStyle["imageDiv"]}>
            <img variants={item} src={background} alt="background png" />
          </motion.div>
          <motion.div variants={itemMain} className={newsStyle["content-text"]}>
            <p variants={item}>
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
