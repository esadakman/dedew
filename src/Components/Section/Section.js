// import Quiz from "./Quiz/Quiz";
import { useState } from "react";
// import { fingers } from "../Images";
import { fingerPng } from "../Images";
import sectionStyle from "./sectionStyle.module.scss";
import Question from "../Question";
import Hints from "../Hints";

function Section() {
  // console.log(Quiz);
  const [quizOpened, setQuizOpened] = useState(false);
  return (
    <div className={sectionStyle["section"]} id="section">
      <header className={sectionStyle["header"]}>
        <img src={fingerPng} alt="" />
        <div className={sectionStyle["btn-container"]}>
          <button className={sectionStyle["header-button"]}>
            MINT CALENDAR
          </button> 
          <button
            className={sectionStyle["header-button"]}
            onClick={() => setQuizOpened(!quizOpened)}
          >
            QUIZ
          </button>
        </div>
        {quizOpened ? (
          <div>
            <div className="quiz-container">
              <div className="quiz_inner">
                <div className="answer-count">
                  <h4>Answer Count: 2</h4>
                </div>

                <div className="quiz-main">
                  <div className="container">
                    <Question
                    // question={question}
                    // inputEvent={getUserAnswer}
                    // submitEvent={checkAnswer}
                    // loading={loading}
                    />
                    <Hints
                    // userCount={userCount}
                    // question={question}
                    // user={user}
                    />
                  </div>
                </div>

                <div className="hint-count">
                  <button
                    className="quiz-button"
                    onClick={() => setQuizOpened(false)}
                  >
                    CLOSE
                  </button>
                  <h4>Hint Count: 3</h4>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ visibility: "hidden" }}></div>
        )}
      </header>
    </div>
  );
}

export default Section;
