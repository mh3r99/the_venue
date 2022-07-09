import { Element } from "react-scroll";
import Featured from "./components/Featured/Featured";
import Footer from "./components/HeaderFooter/Footer";
import Header from "./components/HeaderFooter/Header";
import Highlights from "./components/Highlights/Highlights";
import Location from "./components/Location/Location";
import Pricing from "./components/Pricing/Pricing";
import VenueNfo from "./components/VenueNfo/VenueNfo";
import "./resources/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
