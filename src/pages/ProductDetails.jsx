import { useEffect, useState } from "react";
import {
  Link,
  useParams
} from "react-router-dom";

import ProductGrid from "../components/ProductGrid";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError("");

        const data =
          await getProductById(id);

        setProduct(data);
      } catch (error) {
        setError(
          error.message ||
            "Failed to load product."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="product-details-page">
        <div className="container loading-state">
          <p>Loading product...</p>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="product-details-page">
        <div className="container empty-state">
          <h1>Product Not Found</h1>

          <p>
            We couldn't find the product you're
            looking for.
          </p>

          <Link
            to="/products"
            className="hero-button"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <div className="container">
        <Link
          to="/products"
          className="back-link"
        >
          ← Back to Products
        </Link>

        <section className="product-details">
          <div className="product-details-image-wrapper">
            <img
              src={product.image}
              alt={product.title}
              className="product-details-image"
            />
          </div>

          <div className="product-details-content">
            <p className="eyebrow">
              {product.category}
            </p>

            <h1>{product.title}</h1>

            <p className="product-details-price">
              ${product.price.toFixed(2)}
            </p>

            <p className="product-details-description">
              {product.description}
            </p>

            <button
              className="product-action-button"
              onClick={() =>
                addToCart(product)
              }
            >
              Add to Cart
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;