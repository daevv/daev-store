import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";

const SiteNavigation = () => {
  const count = useSelector(state => state.cart.count) 
  return (
    <div className="header">
      <div className="container">
        <div className="nav-container">
          <Link className="nav-logo" to="/">
            DaevStore
          </Link>
          <nav className="nav">
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
            <NavLink className="nav__link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav__link" to="/contacts">
              Contact
            </NavLink>
            <NavLink className="nav__link relative" to="/cart">
              <div className="cart-nav"></div>
              {count > 0 ? <div className="items-count">{count}</div> : null}
            </NavLink>
          </nav>
          <NavLink className="nav__link--mobile nav__link relative" to="/cart">
              <div className="cart-nav"></div>
              {count > 0 ? <div className="items-count">{count}</div> : null}
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SiteNavigation;
