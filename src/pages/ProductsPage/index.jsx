import "./styles.css";

const ProductCard = () => {
  const handeClick = () => {};
  return (
    <div className="card">
      <img className="card__img" src="" alt="product-img" />
      <hr className="card__splitter" />
      <p className="card__title">Best bag ever</p>
      <p className="card__price">$ 112</p>
      <button className="card__btn" onClick={handeClick}>
        Add to cart
      </button>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="main-page-bg">
      <div className="container">
        <div className="products">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
