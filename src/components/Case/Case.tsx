import image from "../../assets/case.png";
import "./Case.css";

function Case() {
  return (
    <section className="case section grid" id="case">
      <h2 className="section__title section__title-gradient">Case</h2>

      <div className="case__container container grid">
        <div>
          <img src={image} alt="Beats Headphone Case" className="case__img" />
        </div>

        <div className="case__data">
          <p className="case__description">
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>

          <button className="button button--flex">
            <i className="ri-information-line button__icon"></i> More info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Case;
