import Featured from "./components/Featured/Featured";
import Header from "./components/HeaderFooter/Header";
import Highlights from "./components/Highlights/Highlights";
import VenueNfo from "./components/VenueNfo/VenueNfo";
import "./resources/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueNfo />
      <Highlights />
    </div>
  );
}

export default App;
