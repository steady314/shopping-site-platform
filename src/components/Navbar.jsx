import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="logo">
          ShopSite
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/cart">
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;