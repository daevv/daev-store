import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { useEffect } from "react";
import { addToCart, fetchProducts } from "../../store/productsReducer";
import { Link } from "react-router-dom";

const ProductCard = ({ image, price, title, id }) => {
  const dispatch = useDispatch();
  const generateAddHandler = (id, price) => () => {
    dispatch(addToCart({ id, price }));
  };

  return (
    <div className="card">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <div
          className="card__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Link>
      <hr className="card__splitter" />
      <p className="card__title">{title}</p>
      <p className="card__price">$ {price}</p>
      <button className="card__btn" onClick={generateAddHandler(id, price)}>
        Add to cart
      </button>
    </div>
  );
};

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="main-page-bg">
      <div className="container">
        <div className="products">
          {products.map(({ images, price, title, id }) => (
            <ProductCard
              key={id}
              id={id}
              image={images[0]}
              price={price}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
