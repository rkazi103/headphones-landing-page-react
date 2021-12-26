import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const linkAction = (): void => setOpen(false);

  const changeHeaderBackground = (): void => {
    if (window.scrollY >= 50) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBackground);

    return () => {
      window.removeEventListener("scroll", changeHeaderBackground);
    };
  }, []);

  return (
    <header className={`header ${active && "scroll-header"}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={logo} alt="" />
        </a>

        <div className={`nav__menu ${open && "show-menu"}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={linkAction}>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#specs" className="nav__link" onClick={linkAction}>
                {" "}
                Specs
              </a>
            </li>

            <li className="nav__item">
              <a href="#case" className="nav__link" onClick={linkAction}>
                {" "}
                Case
              </a>
            </li>

            <li className="nav__item">
              <a href="#products" className="nav__link" onClick={linkAction}>
                {" "}
                Products
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={() => setOpen(false)}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" onClick={() => setOpen(true)}>
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
