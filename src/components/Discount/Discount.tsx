import "./Discount.css";
import discount from "../../assets/discount.png";

function Discount() {
  return (
    <section className="discount section">
      <div className="discount__container container grid">
        <div className="discount__animate">
          <h2 className="discount__title">
            Immerse yourself in <br />
            your music
          </h2>
          <p className="discount__description">Get it now, up to 50% off.</p>
          <button className="button button--flex">
            <i className="ri-shopping-bag-line button__icon"></i> Shop Now
          </button>
        </div>

        <img src={discount} alt="More Headphones" className="discount__img" />
      </div>
    </section>
  );
}

export default Discount;
