import Featured from "./components/Featured/Featured";
import Header from "./components/HeaderFooter/Header";
import VenueNfo from "./components/VenueNfo/VenueNfo";
import "./resources/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueNfo />
    </div>
  );
}

export default App;
