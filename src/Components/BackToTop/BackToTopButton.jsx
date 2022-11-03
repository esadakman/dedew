import React from "react";
import { useEffect, useState } from "react";
import "./button.scss";

const BackToTopButton = () => {
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div >
      {backTop && (
        <button className="backTop" onClick={scrollUp} >
          Back to top
          {/* <i className="fa-solid fa-up"></i> */}
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
