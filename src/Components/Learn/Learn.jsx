import React from "react";
import Hi from "./Hi";
import learnStyle from "./learnStyle.module.scss";

const Learn = () => {
  return (
    <>
      <div className={learnStyle["container"]}>
        <div className="text-center pt-5 text-light">
          <h2>LEARN</h2>
        </div>
        <div className={learnStyle["content"]}>
          <h1>WHO ARE WE ?</h1>
          <p>
            First, each and every member of this community is coming from
            various parts of the software sector. In this regard, in our
            community, our members' software experience is arithmetically more
            than fifteen years. So, the idea behind this team to come together
            is to give service to people in the area of software To do so, we
            are going to analyze our members and we will make some groups as a
            knowledge Overall, in this concept, our business connections will
            demand from our members to work with them
          </p>
        </div>
      </div>
      <Hi/>
    </>
  );
};

export default Learn;
