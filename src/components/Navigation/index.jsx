import { Link, NavLink } from "react-router-dom";
import './styles.css';

const SiteNavigation = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="nav-container">
          <Link className="nav-logo" to="/">
            DaevStore
          </Link>
          <nav className="nav">
            <NavLink className="nav__link" to="/" >
              Home
            </NavLink>
            <NavLink className="nav__link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav__link" to="/contacts">
              Contact
            </NavLink>
            <NavLink className="nav__link" to="/cart">
              Cart
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SiteNavigation;
