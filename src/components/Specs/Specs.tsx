import specs from "../../assets/specs.png";
import "./Specs.css";

function Specs() {
  return (
    <section className="specs section grid" id="specs">
      <h2 className="section__title section__title-gradient">Specs</h2>

      <div className="specs__container container grid">
        <div className="specs__content grid">
          <div className="specs__data">
            <i className="ri-bluetooth-line specs__icon"></i>
            <h3 className="specs__title">Connection</h3>
            <span className="specs__subtitle"> Bluetooth v5.2</span>
          </div>

          <div className="specs__data">
            <i className="ri-battery-charge-line specs__icon"></i>
            <h3 className="specs__title">Battery</h3>
            <span className="specs__subtitle"> Duration 40h</span>
          </div>

          <div className="specs__data">
            <i className="ri-plug- specs__icon"></i>
            <h3 className="specs__title">Load</h3>
            <span className="specs__subtitle"> Fast charge 4.2-AAC</span>
          </div>

          <div className="specs__data">
            <i className="ri-mic-line specs__icon"></i>
            <h3 className="specs__title">Microphone</h3>
            <span className="specs__subtitle">
              Supports Apple Siri <br />
              and Google
            </span>
          </div>
        </div>

        <div>
          <img
            src={specs}
            alt="More Headphones "
            className="specs__img specs__icon"
          />
        </div>
      </div>
    </section>
  );
}

export default Specs;
