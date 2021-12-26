import "./Product.css";

type ProductProps = {
  title: string;
  price: string;
  img: string;
};

function Product({ title, price, img }: ProductProps) {
  return (
    <article className="products__card">
      <div className="products__content">
        <img src={img} alt="" className="products__img" />
        <h3 className="products__title">{title}</h3>
        <span className="products__price">{price}</span>

        <button className="button button--flex products__button">
          <i className="ri-shopping-bag-line button__icon"></i>
        </button>
      </div>
    </article>
  );
}

export default Product;
