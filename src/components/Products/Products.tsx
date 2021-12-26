import "./Products.css";
import Product from "../Product";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";

function Products() {
  return (
    <section className="products section" id="products">
      <h2 className="section__title section__title-gradient products__line">
        Choose <br />
        Your Style
      </h2>

      <div className="products__container container grid">
        <Product title="Black" price="$249" img={product1} />
        <Product title="Red & Black" price="$249" img={product2} />
        <Product title="Night Black" price="$279" img={product3} />
        <Product title="Blue" price="$279" img={product4} />
        <Product title="Twilight Gray" price="$319" img={product5} />
      </div>
    </section>
  );
}

export default Products;
