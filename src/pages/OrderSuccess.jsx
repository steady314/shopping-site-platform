import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <main className="order-success">
      <div className="container">
        <div className="success-card">
          <div className="success-icon">
            ✓
          </div>

          <p className="eyebrow">
            Order Confirmed
          </p>

          <h1>Thank You For Your Order!</h1>

          <p>
            Your order has been successfully submitted.
            We'll use the contact information you provided
            to keep you updated about your delivery.
          </p>

          <Link
            to="/products"
            className="hero-button"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;