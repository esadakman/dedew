import React from "react";
import "./carouselStyle.scss";  
// import News from "./News";
import Carousel from "react-bootstrap/Carousel";
import background from "../../assets/images/carou_img_1.png"; 
import johnDoel from "../../assets/images/carou_img_2.png";

const CarouselSection = () => {
  return (
    <>
      {/* <News /> */}
      <Carousel>
        {/* // ! First Slide */}
        <Carousel.Item>
          <div className="first-container d-block w-100">
            <div className="text-center pt-5 text-light">
              <h2>NEWS</h2>
            </div>
            <div className="first-content ">
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
        </Carousel.Item>
        {/* // ! Second Slide */}
        <Carousel.Item>
          <div className="second-container d-block w-100">
            <div className="text-center pt-5 text-light">
              <h2>BLOGS</h2>
            </div>
            <div className="blog-container  ">
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
                      Examination will start 14th June 20 March 2022 *discord
                      and slack channels members will enter exam for improving
                      positions 03.20.22 each three months *our team announce to
                      you we are going to create one more nft collection for
                      designers... 16 March 2022 *we will meet in north
                      macedonia for having fun and introducing *our partnership
                      coltra will describe us !! ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* // ! Third Slide */}

        <Carousel.Item>
          <div className="third-container d-block w-100">
            <div className="text-center pt-5 text-light">
              <h2>LEARN</h2>
            </div>
            <div className="carou-container ">
              <h1 className="title-who m-5">WHO ARE WE ?</h1>
              <p className=" w-75 my-5 text-justify px-5">
                First, each and every member of this community is coming from
                various parts of the software sector. In this regard, in our
                community, our members' software experience is arithmetically
                more than fifteen years. So, the idea behind this team to come
                together is to give service to people in the area of software To
                do so, we are going to analyze our members and we will make some
                groups as a knowledge Overall, in this concept, our business
                connections will demand from our members to work with them
              </p>
            </div>
          </div>
        </Carousel.Item>

        {/* // ! Fourth Slide */}

        <Carousel.Item>
          <div className="fourth-container">
            <div className="text-center pt-5 text-light">
              <h2>ART</h2>
            </div>
            <div className="fourth-content">
              <div className=" ">
                <img className="pp" src={johnDoel} alt="" />
              </div>
              <div className="fourth-text">
                <p className="desc m-3 d-flex flex-column text-center">
                  John Doel
                  <span>CEO</span>
                </p>
                <p className="desc text-center px-5 ">
                  Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* // ! Fifth Slide */}
        <Carousel.Item>
          <div className="fifth-container">
            <div className="text-center pt-5 text-light ">
              <h2>CONTACT US</h2>
            </div>
            <div className="fifth-content">
              <div className="links ">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-discord"></i>
                <i class="fa-solid fa-envelope"></i>
              </div>
              <p>
                Copyright &#169;
                {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSection;
