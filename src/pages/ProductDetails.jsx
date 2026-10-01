import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="container empty-state">
          <h1>Product Not Found</h1>

          <p>
            We couldn't find the product you're looking for.
          </p>

          <Link to="/products" className="hero-button">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <main className="product-details-page">
      <div className="container">
        <Link to="/products" className="back-link">
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
              ₦{product.price.toLocaleString()}
            </p>

            <p className="product-details-description">
              {product.description}
            </p>

            <button className="product-action-button">
              Add to Cart
            </button>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="related-products">
            <div className="section-heading">
              <p className="eyebrow">You may also like</p>

              <h2>Related Products</h2>
            </div>

            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductDetails;