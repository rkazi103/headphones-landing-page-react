import { useEffect, useState } from "react";
import "./App.css";
import {
  Header,
  Home,
  Specs,
  Sponsor,
  Case,
  Discount,
  Products,
  Footer,
} from "./components";

function App() {
  const [active, setActive] = useState(false);

  const handleScroll = (): void => {
    if (window.scrollY >= 200) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <Footer />

      <a href="#" className={`scrollup ${active && "show-scroll"}`}>
        <i className="ri-arrow-up-s-line scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;
