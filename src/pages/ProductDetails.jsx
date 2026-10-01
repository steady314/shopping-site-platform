import { useParams } from "react-router-dom";
import { useContext } from "react";
import "./ProductDetails.css";
import products from "../data/products";
import CartContext from "../context/CartContext";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = products.find(
        (product) => product.id === Number(id)
    );
        function handleAddToCart() {
    addToCart(product)}
    if(!product) {
        return(
            <main className="page">
                <section className="page_content">
                    <h1>Product not found</h1>
                    <p>Sorry, we couldn't find the product you're looking for.</p>
                </section>
            </main>
        )
    }
    return(
        <main className="product-details">
            <div className="product-details_container">
                <div className="product-details_image">
                    <img src="{product.image}" alt="{product.title}"/>
                </div>
                <div className="product-details_content">
                    <p className="product-details_category"> {product.category} </p>
                    <h1> {product.title} </h1>
                    <p className="product-details_rating"> {product.rating} </p>
                    <p className="product-details_price"> ${product.price}</p>
                    <p className="product-details_description"> {product.description} </p>
                    <button className="product-details_button" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </main>
    );
}
export default ProductDetails;