import "./App.css";
import {
  Header,
  Home,
  Specs,
  Sponsor,
  Case,
  Discount,
  Products,
} from "./components";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Sponsor />
        <Specs />
        <Case />
        <Discount />
        <Products />
      </main>
    </>
  );
}

export default App;
