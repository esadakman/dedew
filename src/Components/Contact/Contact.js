import React from "react";
import contactStyle from './contactStyle.module.scss'

const Contact = () => {
  return (
    <div className={contactStyle["container"]} id="contact">
      <div className="text-center pt-5 text-light ">
        <h2>CONTACT US</h2>
      </div>
      <div className={contactStyle["content"]}> 
        <div className={contactStyle["links"]}>
          <i className="fa-brands fa-instagram" id={contactStyle["instagram"]}></i>
          <i className="fa-brands fa-youtube" id={contactStyle["youtube"]}></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in" id={contactStyle["linkedin"]}></i>
          <i className="fa-brands fa-discord" id={contactStyle["discord"]}></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <p className={contactStyle["copyright"]}>
          Copyright DEVBIT &#169;
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
