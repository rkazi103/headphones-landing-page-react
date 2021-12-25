import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const linkAction = (): void => setOpen(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="assets/img/logo.png" alt="" />
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
