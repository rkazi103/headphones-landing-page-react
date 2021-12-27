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
import ScrollReveal from "scrollreveal";
import animateScroll from "./lib/animateScroll";

function App() {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
  });
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

  useEffect(() => {
    animateScroll(sr);
  }, [sr]);

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

      <button className={`scrollup ${active && "show-scroll"}`}>
        <i className="ri-arrow-up-s-line scrollup__icon"></i>
      </button>
    </>
  );
}

export default App;
