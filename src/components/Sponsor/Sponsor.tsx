import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";
import "./Sponsor.css";

function Sponsor() {
  return (
    <section className="sponsor section">
      <div className="sponsor__container container grid">
        <img src={sponsor1} alt="Apple Sponsor" className="sponsor__img" />
        <img src={sponsor2} alt="Spotify Sponsor" className="sponsor__img" />
        <img src={sponsor3} alt="Amazon Sponsor" className="sponsor__img" />
        <img src={sponsor4} alt="Youtube Sponsor" className="sponsor__img" />
      </div>
    </section>
  );
}

export default Sponsor;
