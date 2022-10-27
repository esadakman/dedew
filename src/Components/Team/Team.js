import React from "react";
import teamStyle from "./Style/teamStyle.module.scss";
import Carousel from "./carousel/Carousel";
import cards from "./carousel/data";
const Team = () => {
  return (
    <>
      <section className={teamStyle["container"]}>
        <header className={teamStyle["header"]}>
          <h2>MEET THE TEAM</h2>
        </header>
        <div className={teamStyle["section"]}>
          <Carousel
            cards={cards} 
          />
        </div>
      </section> 
    </>
  );
};

export default Team;
