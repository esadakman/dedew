import React from "react";
import "../styles/blog.css";
import Carousel from "react-bootstrap/Carousel";
import background from "../assets/images/news_img.png";

const Blog = () => {
  return (
    <>
      {/* Carousel */}
      <Carousel fade autoPlay="false">
        {/* // ! First Slide */}
        {/* <Carousel.Item > 
          <div className="text-center pt-5 text-light" ><h2>NEWS</h2></div>
          <div className="news-container d-flex flex-column justify-content-center align-items-center p-3">
            <div className="d-flex justify-content-center align-items-center flex-wrap p-3">
              <div className="imageDiv ">
                <img src={background} alt="background png" />
              </div>
              <div className="content">
                <p>
                  Examination will start 14th June 20 March 2022 *discord and
                  slack channels members will enter exam for improving positions
                  03.20.22 each three months *our team announce to you we are
                  going to create one more nft collection for designers... 16
                  March 2022 *we will meet in north macedonia for having fun and
                  introducing *our partnership coltra will describe us !! ...
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item> */}
        {/* // ! Second Slide */}
        {/* <Carousel.Item>
          <div className="text-center pt-5 text-light">
            <h2>BLOGS</h2>
          </div>
          <div className="d-flex blog-container flex-column align-items-center ">
            <div className="content-container d-flex">
              <div className="blog-left d-flex justify-content-center align-items-center flex-column gap-2">
                <div className="circle_1"></div>
                <div className="circle_2"></div>
                <div className="circle_3"></div>
              </div>
              <div className="blog-right d-flex flex-column">
                <div className="circle-up d-flex align-items-center ms-5">
                  <div className="circle-right"></div>
                </div>
                <div className="content">
                  <p>
                    Examination will start 14th June 20 March 2022 *discord and
                    slack channels members will enter exam for improving
                    positions 03.20.22 each three months *our team announce to
                    you we are going to create one more nft collection for
                    designers... 16 March 2022 *we will meet in north macedonia
                    for having fun and introducing *our partnership coltra will
                    describe us !! ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item> */}
        {/* // ! Third Slide */}

        <Carousel.Item>
          <div className="text-center pt-5 text-light h2">
            <h2>LEARN</h2>
          </div>
          <div className="carou-container d-flex flex-column align-items-center ">
            <div className="d-flex justify-content-center align-align-items-center">
               

               
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* 2.carousel */}
    </>
  );
};

export default Blog;
 