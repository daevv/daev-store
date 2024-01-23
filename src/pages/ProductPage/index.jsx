import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/productsReducer";
import "./styles.css";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const catalog = useSelector((state) => state.catalog);
  const generateAddHandler = (id, price) => () => {
    dispatch(addToCart({ id: Number(id), price }));
  };
  const handleBackClick = () => {
    navigate('/products');
  }
  const currentProduct = catalog.find((e) => e.id === Number(id));
  const { price, title, images, description } = currentProduct;
  return (
    <div className="main-page-bg">
      <div className="relative container">
        <button className="back-btn card__btn" onClick={handleBackClick}>← Back to all products</button>
        <div className="product-box">
          <div
            className="product-img"
            style={{ backgroundImage: `url(${images[0]})` }}
          ></div>
          <div className="description-block">
            <p className="title">{title}</p>
            <p className="price">${price}</p>
            <p className="description">{description}</p>
            <button
              className="card__btn"
              onClick={generateAddHandler(id, price)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
