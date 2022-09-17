import React from 'react' 
import "../styles/header.css"

const Landing = () => {
  return (
    <header className="header d-flex justify-content-center align-items-end">
        <div className="button-container d-flex g-2 mb-4">
              <button className='header-button' >MINT CALENDAR</button>
              <button className='header-button' >QUIZ</button> 
        </div>        
    </header>
  )
}

export default Landing

