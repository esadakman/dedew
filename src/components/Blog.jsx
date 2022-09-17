import React from "react";
import "../styles/blog.css";

const Blog = () => {
  return (
    <>
      <div className="d-flex blog-container flex-column align-items-center p-5">
        <div className="text-light">
          <h2>Blog</h2>
        </div>
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
                slack channels members will enter exam for improving positions
                03.20.22 each three months *our team announce to you we are
                going to create one more nft collection for designers... 16
                March 2022 *we will meet in north macedonia for having fun and
                introducing *our partnership coltra will describe us !! ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="..." alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Blog;
