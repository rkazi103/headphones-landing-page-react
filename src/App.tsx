import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Sponsor />
      </main>
    </>
  );
}

export default App;
