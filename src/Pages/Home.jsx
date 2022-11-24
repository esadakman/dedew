import Header from "../Components/Header/Header";
import Section from "../Components/Section/Section";
import News from "../Components/News/News";
import Contact from "../Components/Contact/Contact";
import Blog from "../Components/Blog/Blog";
import Learn from "../Components/Learn FAQ/Learn";
import Roadmap from "../Components/Roadmap/Roadmap";
import Team from "../Components/Team/Team";
import BackToTopButton from "../Components/BackToTop/BackToTopButton";
import { useEffect, useState } from "react";
import "./homeStyle.scss";
const Home = () => {
  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth]);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }
  const width = useWindowSize();
  return (
    <>
      <>
        <div className="homeContainer">
          <Header />
          <Section />
          <Blog />
          <News />
          <Learn />
          <Roadmap />
          <Team />
          <Contact />
        </div>

        <BackToTopButton />
      </>
    </>
  );
};

export default Home;

// {width > 760 ? (
//   <div className="homeContainer">
//     <Section />
//     <Blog />
//     <News />
//     <Learn />
//     <Roadmap />
//     <Team />
//     <Contact />
//   </div>
// ) : (
//   <>
//     <Header />
//     <Section />
//     <Blog />
//     <News />
//     <Learn />
//     <Roadmap />
//     <Team />
//     <Contact />
//     {/* <BackToTopButton /> */}
//   </>
// )}
