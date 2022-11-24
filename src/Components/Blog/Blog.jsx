import React from "react";
import blogStyle from "./blogStyle.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "easeInOut",
          duration: 1.2,
        },
      });
      animationRight.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "easeInOut",
          duration: 1.2,
        },
      });
    }
    if (!inView) {
      animationLeft.start({
        opacity: 0,
        y: "-50vh",
      });
      animationRight.start({
        opacity: 0,
        y: "50vh",
      });
    }
    // console.log("use effecthook, inView =", inView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section className={blogStyle["container"]} id="blog" ref={ref}>
      <header className="text-center pt-5 text-light">
        <h2>BLOG</h2>
      </header>
      <div className={blogStyle["blog-container"]}>
        <motion.div className={blogStyle["content-container"]}>
          <motion.div
            className={blogStyle["blog-left"]}
            animate={animationLeft}
            // initial={{ opacity: 0, y: -100 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ type: "easeInOut", duration: 1 }}
          >
            <div className={blogStyle["circle_1"]}></div>
            <div className={blogStyle["circle_2"]}></div>
            <div className={blogStyle["circle_3"]}></div>
          </motion.div>
          <motion.div
            animate={animationRight}
            className={blogStyle["blog-right"]}
          >
            <div className={blogStyle["circle-up"]}>
              <div className={blogStyle["circle-right"]}></div>
            </div>
            <div className={blogStyle["content"]}>
              <p>
                Examination will start 14th June 20 March 2022 *discord and
                slack channels members will enter exam for improving positions
                03.20.22 each three months *our team announce to you we are
                going to create one more nft collection for designers... 16
                March 2022 *we will meet in north macedonia for having fun and
                introducing *our partnership coltra will describe us !! ...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

// {/* <section className={blogStyle["container"]}>
// <header className="text-center pt-5 text-light">
//   <h2>BLOG</h2>
// </header>
// <div className={blogStyle["blog-container"]}>
//   <div className={blogStyle["content-container"]}>
//     <div className={blogStyle["blog-left"]}>
//       <div className={blogStyle["circle_1"]}></div>
//       <div className={blogStyle["circle_2"]}></div>
//       <div className={blogStyle["circle_3"]}></div>
//     </div>
//     <div className={blogStyle["blog-right"]}>
//       <div className={blogStyle["circle-up"]}>
//         <div className={blogStyle["circle-right"]}></div>
//       </div>
//       <div className={blogStyle["content"]}>
//         <p>
//           Examination will start 14th June 20 March 2022 *discord and
//           slack channels members will enter exam for improving positions
//           03.20.22 each three months *our team announce to you we are
//           going to create one more nft collection for designers... 16
//           March 2022 *we will meet in north macedonia for having fun and
//           introducing *our partnership coltra will describe us !! ...
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// </section> */}
