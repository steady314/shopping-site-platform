import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="container empty-state">
          <h1>Your Cart Is Empty</h1>

          <Link
            to="/products"
            className="hero-button"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div>
                  <h2>{item.title}</h2>

                  <p>
                    ₦
                    {item.price.toLocaleString()}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <p>
              Total:
              ₦
              {totalPrice.toLocaleString()}
            </p>

            <Link
              to="/checkout"
              className="hero-button"
            >
              Checkout
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;