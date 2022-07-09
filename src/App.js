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
      <Featured />
      <VenueNfo />
      <Highlights />
      <Pricing />
      <Location />
      <Footer/>
    </div>
  );
}

export default App;
