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
            {cartItems.map((product) => {
              if (!product || !product.id) {
                return null;
              }

              return (
                <article
                  key={product.id}
                  className="cart-item"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                  />

                  <div>
                    <h2>{product.title}</h2>

                    <p>
                      ${product.price.toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(product.id)
                        }
                      >
                        -
                      </button>

                      <span>
                        {product.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(product.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(product.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <p>
              Total: ${totalPrice.toFixed(2)}
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