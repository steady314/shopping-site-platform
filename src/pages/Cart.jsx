import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import "./Cart.css";

function Cart() {
    const {cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useContext(CartContext);
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    if(cart.length === 0) {
        return(
            <main className="cart">
                <section className="cart_conatiner cart_empty">
                    <h1>Your Cart Is Empty.</h1>
                    <p>You haven't added amything yet.</p>
                    <Link to="/products" className="cart_shop-button">Continue Shopping</Link>

                </section>
            </main>
        );
    }
    return (
        <main className="cart">
            <section className="cart_container">
                <div className="cart_header">
                    <div>
                        <p className="cart_eyebrow">SHOPPING CART</p>
                        <h1>Your Cart</h1>
                    </div>
                    <p>
                        {cart.length}{""}
                        {cart.length === 1 ? "item" : "items"}
                    </p>
                </div>
                <div className="cart_layout">
                    <div className="cart-items">
                        {cart.map((item) => (
                            <aritcle className="cart-item" key={item.id}>
                                <div className="cart-item_image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="cart-item_info">
                                    <p className="cart-item_category">
                                        {item.category}
                                    </p>
                                    <h2>{item.title}</h2>
                                    <p className="cart-item_price">
                                        ${item.price}
                                    </p>
                                    <div className="cart-item_actions">
                                        <div className="quantity">
                                            <button onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease quantity of ${item.title}`}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)} aria-label={`Increasae quantity of ${item.title}`}>+</button>
                                        </div>
                                        <button className="cart-item_remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </aritcle>
                        ))}
                    </div>
                    <aside className="cart-summary_row">
                        <h2>Order Summary</h2>
                        <div className="cart-summary_row">
                            <span>
                                ${subtotal.toFixed(2)}
                            </span>
                        </div>
                        <div className="cart-summary_row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="cart-summary_divider" />
                        <div className="cart-summary_total">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button className="cart-summary_button">Proceed to Checkout</button>
                    </aside>
                </div>
            </section>
        </main>
    );
}
export default Cart;