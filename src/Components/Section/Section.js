// import MintCalendar from "./MintCalendar/MintCalendar";
// import Quiz from "./Quiz/Quiz";
// import "./sectionStylescss";
import sectionStyle from "./sectionStyle.module.scss";
function Section() {
  return (
    <div className={sectionStyle["section"]}>
      
      <header className={sectionStyle["header"]}>
        <div className="d-flex gap-5 mb-4">
              <button className={sectionStyle["header-button"]} >MINT CALENDAR</button>
              <button className={sectionStyle["header-button"]} >QUIZ</button> 
        </div>        
    </header>
    </div>
  );
}

export default Section;

// {/* <div className="wallpaper-container">
//         <div
//           className="wallpaper"
//           dangerouslySetInnerHTML={{ __html: SvgFingers }}
//         />

//         <div className="buttons">
//           <MintCalendar />
//           <Quiz />
//         </div>
//       </div> */}