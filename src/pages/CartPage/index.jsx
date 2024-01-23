import { addToCart, decrease, increase, removeFromCart } from "../../store/productsReducer";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

const GoodItem = ({ title, price, count, image, id }) => {
  const dispatch = useDispatch();
  const generateRemoveHandler = (id, count, price) => () => {
    dispatch(removeFromCart({id, count, price}));
  }
  const generateIncreaseHandler = (id, price) => () => {
    dispatch(addToCart({id, price}));
  }
  const generateDecreaseHandler = (id, price) => () => {
    dispatch(decrease({id, price}));
  }
  return (
    <div className="good">
      <div className="good__pic" style={{ backgroundImage: `url(${image})` }} />
      <div className="good__info-block">
        <p className="good__name">{title}</p>
        <p className="good__price">$ {price}</p>
        <div className="quantity-block">
          <button className="quantity-block__decrease" onClick={generateDecreaseHandler(id, price)}></button>
          <p className="quantity-block__value">{count}</p>
          <button className="quantity-block__increase" onClick={generateIncreaseHandler(id, price)}></button>
        </div>
      </div>
      <button className="good__delete-btn" onClick={generateRemoveHandler(id, count, price)}></button>
      <p className="good__total-price">$ {count * price}</p>
    </div>
  );
};

const CartPage = () => {
  const catalog = useSelector((state) => state.catalog);
  const { products, totalSum } = useSelector((state) => state.cart);

  const getCartItems = () => {
    return products.map(({ id, count }) => {
      const currentItem = catalog.find((e) => e.id === id);
      const { title, price, images } = currentItem;
      return {
        title,
        price,
        count,
        image: images[0],
        id,
      };
    });
  };
  return (
    <div className="main-page-bg">
      <div className="container">
        <div className="flex-container">
          <div className="goods">
            {getCartItems().map(({ title, price, count, image, id }, ind) => (
              <GoodItem
                key={ind}
                title={title}
                price={price}
                count={count}
                image={image}
                id={id}
              />
            ))}
          </div>
          <div className="purchase-block">
            <p className="purchase-block__price">TOTAL: $ {totalSum}</p>
            <button className="purchase-block__btn button">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
