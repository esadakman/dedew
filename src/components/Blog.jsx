import React from "react";
import "../styles/blog.css";
import Carousel from "react-bootstrap/Carousel";
import background from "../assets/images/news_img.png";
import johnDoel from "../assets/images/ceo_pp.png";

const Blog = () => {
  return (
    <>
      {/* Carousel */}
      <Carousel fade>
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

        {/* <Carousel.Item>
          <div className="text-center pt-5 text-light h2">
            <h2>LEARN</h2>
          </div>
          <div className="carou-container d-flex flex-column align-items-center text-light py-3 px-5">
            <div className="d-flex justify-content-center align-items-center flex-column"> 
                <h1 h1 className="title-who m-5">WHO ARE WE ?</h1> 
                <p className="desc w-75 my-5 text-justify px-5" >
                  First, each and every member of this community is coming from various parts of the software sector. In this regard, in our community, our members' software experience is arithmetically more than fifteen years. So, the idea behind this team to come together is to give service to people in the area of software To do so, we are going to analyze our members and we will make some groups as a knowledge Overall, in this concept, our business connections will demand from our members to work with them
                </p> 
            </div>
          </div>
        </Carousel.Item> */}
        {/* // ! Fourth Slide */}

        {/* <Carousel.Item>
          <div className="text-center pt-5 text-light h2">
            <h2>ART</h2>
          </div>
          <div className="carou-container d-flex flex-column align-items-center text-light py-3 px-5">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mt-3" >
                <img className="pp" src={johnDoel} alt="" />
              </div>
              <p className="desc m-3 d-flex flex-column text-center">
                John Doel
                <span>CEO</span>
              </p> 
              <p className="desc w-50  text-center px-5 ">
                Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </Carousel.Item> */}
        {/* // ! Fifth Slide */}

        <Carousel.Item>
          <div className="text-center pt-5 text-light h2 ">
            <h2>CONTACT US</h2>
          </div>
          <div className="carou-container d-flex flex-column align-items-center text-light py-3 px-5">
            <div className="social-icons d-flex justify-content-center align-items-center">
              <div className="links py-5">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-discord"></i>
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
              <p className="text-center">
                Copyright &#169;
                {new Date().getFullYear()}. All rights reserved.
              </p>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* 2.carousel */}
    </>
  );
};

export default Blog;
