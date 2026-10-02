import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const {
    cartItems,
    totalPrice,
    clearCart
  } = useCart();

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="container empty-state">
          <h1>Your Cart Is Empty</h1>

          <p>
            Add some products before checking out.
          </p>

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    clearCart();

    navigate("/order-success");
  }

  return (
    <main className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <p className="eyebrow">Checkout</p>

          <h1>Complete Your Order</h1>
        </div>

        <div className="checkout-layout">
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >
            <section>
              <h2>Customer Information</h2>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />

                  {errors.firstName && (
                    <p className="form-error">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />

                  {errors.lastName && (
                    <p className="form-error">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <p className="form-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  {errors.phone && (
                    <p className="form-error">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="form-field form-field-full">
                  <label htmlFor="address">
                    Delivery Address
                  </label>

                  <input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />

                  {errors.address && (
                    <p className="form-error">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="city">
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />

                  {errors.city && (
                    <p className="form-error">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <button
              type="submit"
              className="checkout-button"
            >
              Place Order
            </button>
          </form>

          <aside className="checkout-summary">
            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="checkout-item"
              >
                <div>
                  <strong>{item.title}</strong>

                  <p>
                    Qty: {item.quantity}
                  </p>
                </div>

                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="checkout-total">
              <strong>Total</strong>

              <strong>
                ${totalPrice.toFixed(2)}
              </strong>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;