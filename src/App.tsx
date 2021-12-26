import "./App.css";
import { Header, Home, Specs, Sponsor, Case } from "./components";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Sponsor />
        <Specs />
        <Case />
      </main>
    </>
  );
}

export default App;
