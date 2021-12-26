import "./App.css";
import { Header, Home, Specs, Sponsor } from "./components";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Sponsor />
        <Specs />
      </main>
    </>
  );
}

export default App;
