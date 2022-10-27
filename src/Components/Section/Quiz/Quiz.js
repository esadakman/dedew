import "./style.scss";

import React from 'react'

const Quiz = (props) => {
  return (
    <div className="quiz-container">
              <div className="popup">
          <div className="popup_inner">
            <h1 className="popup-text">
              Please Fill All Information Correctly
            </h1>
            <button className="popup-button" onClick={() =>(false)}>
              CLOSE
            </button>
          </div>
        </div>
    </div>
  )
}

export default Quiz
