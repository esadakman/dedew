import React from "react";
import "../styles/news.css";
import background from "../assets/images/news_img.png";

const News = () => {
  return (
    <div className="news-container d-flex flex-column justify-content-center align-items-center p-3">
      <h3 className="pb-5 text-light"  >NEWS</h3>
      <div className="d-flex justify-content-center align-items-center flex-wrap p-3">
        <div className="imageDiv ">
          <img src={background} alt="background png" />
        </div>
        <div className="content">
          <p>
            Examination will start 14th June 20 March 2022 *discord and slack
            channels members will enter exam for improving positions 03.20.22
            each three months *our team announce to you we are going to create
            one more nft collection for designers... 16 March 2022 *we will meet
            in north macedonia for having fun and introducing *our partnership
            coltra will describe us !! ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
