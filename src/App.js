import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import News from "./Components/News/News";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Learn from "./Components/Learn/Learn";
import Faq from "./Components/Faq/Faq";
import Art from "./Components/Art/Art";
import CarouselSection from "./Components/Carousel/CarouselSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Blog/>
      <News />
      <Faq />
      <Art />
      <Learn/>
      <Contact/>
      <CarouselSection/>
    </div>
  );
}

export default App;
