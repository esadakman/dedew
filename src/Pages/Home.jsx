import Header from "../Components/Header/Header";
import Section from "../Components/Section/Section";
import News from "../Components/News/News";
import Contact from "../Components/Contact/Contact";
import Blog from "../Components/Blog/Blog";
import Learn from "../Components/Learn FAQ/Learn";
import Roadmap from "../Components/Roadmap/Roadmap";
import Team from "../Components/Team/Team";
import BackToTopButton from "../Components/BackToTop/BackToTopButton";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  // FullpageNavigation,
} from "@ap.cx/react-fullpage";
import { useEffect, useState } from "react";

const Home = () => {
  // const [fullPage, setFullPage] = useState(false);
  // const handleResize = () => {
  //   if (window.innerWidth < 760) {
  //     setFullPage(false);
  //   } else {
  //     setFullPage(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // });

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
  // console.log(width);
  return (
    <>
      <Header />
      {width > 760 ? (
        <Fullpage>
          {/* <FullpageNavigation /> */}
          <FullPageSections>
            <FullpageSection>
              <Section />
            </FullpageSection>
            <FullpageSection style={{ paddingTop: "2rem" }}>
              <Blog />
            </FullpageSection>
            <FullpageSection style={{ paddingTop: "4rem" }}>
              <News />
            </FullpageSection>
            <FullpageSection style={{ paddingTop: "4rem", }}>
              <Learn />
            </FullpageSection>
            <FullpageSection style={{ paddingTop: "4rem" }}>
              <Roadmap />
            </FullpageSection>
            <FullpageSection style={{ paddingTop: "2rem" }}>
              <Team />
            </FullpageSection>
            <FullpageSection style={{ paddingTop: "4rem" }}>
              <Contact />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      ) : (
        <>
          <Header />
          <Section />
          <Blog />
          <News />
          <Learn />
          <Roadmap />
          <Team />
          <Contact />
        </>
      )}

      <BackToTopButton />
    </>
  );
};

export default Home;
