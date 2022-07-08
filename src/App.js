import Featured from "./components/Featured/Featured";
import Header from "./components/HeaderFooter/Header";
import "./resources/styles.css";

function App() {
  return (
    <div className="App" style={{ height: "5000px", background: "blue" }}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
