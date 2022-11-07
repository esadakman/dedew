import React from "react";
import blogStyle from "./blogStyle.module.scss";
import { motion } from "framer-motion";

const Blog = () => {
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
    <>
      <section className={blogStyle["container"]}>
        <header className="text-center pt-5 text-light">
          <h2>BLOG</h2>
        </header>
        <motion.div className={blogStyle["blog-container"]}>
          <motion.div
            className={blogStyle["content-container"]}
            variants={container} 
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div variants={item} className={blogStyle["blog-left"]}>
              <div
                variants={item}
                className={blogStyle["circle_1"]} 
              ></div>
              <div
                variants={item}
                className={blogStyle["circle_2"]}
              ></div>
              <div
                variants={item}
                className={blogStyle["circle_3"]}
              ></div>
            </motion.div>

            <motion.div variants={itemMain} className={blogStyle["blog-right"]}>
              <div variants={item} className={blogStyle["circle-up"]}>
                <div className={blogStyle["circle-right"]}></div>
              </div>
              <div variants={item} className={blogStyle["content"]}>
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
        </motion.div>
      </section>
    </>
  );
};

export default Blog;
