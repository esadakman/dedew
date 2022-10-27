import React from 'react'

// const Hints = ({question, userCount, user}) => {
const Hints = () => {
  return (
    <div className="half-bottom">
      <div className="hint">
          <h3>HINTS</h3>
          <ul className="hintList">
                <li id="firstItem">Hint 1</li>
                <li id="secondItem">Hint 2</li>
                <li id="lastItem">Hint 3</li>
              
          </ul>
      </div>
      <footer className="hint-footer">
        
          <h3 className="hintCount">User Count: 5</h3>
          {/* {user ? (
            <h3 className="answerCount">Answer Count: 5</h3>
          ) : ("")} */}
        
      </footer>
    </div>
  )
}

export default Hints