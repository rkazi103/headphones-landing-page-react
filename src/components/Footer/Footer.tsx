import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer section" id="footer">
      <div className="footer__container container grid">
        <span className="footer__logo">
          <img src={logo} alt="Logo" />
        </span>

        <div className="footer__content">
          <h3 className="footer__title">Products</h3>

          <ul className="footer__links">
            <li>
              <span className="footer__link">Headphones</span>
            </li>

            <li>
              <span className="footer__link">Earphones</span>
            </li>

            <li>
              <span className="footer__link">Earbuds</span>
            </li>

            <li>
              <span className="footer__link">Accesories</span>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Support</h3>

          <ul className="footer__links">
            <li>
              <span className="footer__link">Product help</span>
            </li>

            <li>
              <span className="footer__link">Register</span>
            </li>

            <li>
              <span className="footer__link">Updates</span>
            </li>

            <li>
              <span className="footer__link">Provides</span>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <form action="" className="footer__form">
            <input type="email" placeholder="Email" className="footer__input" />

            <button className="button button--flex">
              <i className="ri-send-plane-line button__icon"></i> Subscribe
            </button>
          </form>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="ri-facebook-fill"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="ri-twitter-line"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="footer__copy">
        <a
          href="https://www.github.com/rkazi103"
          target="_blank"
          className="footer__copy-link"
          rel="noreferrer"
        >
          &#169; Rayan K. All right reserved
        </a>
      </p>
    </footer>
  );
}

export default Footer;
