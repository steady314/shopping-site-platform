import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        to={`/products/${product.id}`}
        className="product-card-image-link"
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-card-image"
        />
      </Link>

      <div className="product-card-content">
        <p className="product-card-category">
          {product.category}
        </p>

        <h2>
          <Link to={`/products/${product.id}`}>
            {product.title}
          </Link>
        </h2>

        <p className="product-card-price">
          ₦{product.price.toLocaleString()}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-card-button"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;