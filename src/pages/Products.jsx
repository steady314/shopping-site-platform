import { useEffect, useMemo, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        setProducts(data);
      } catch (error) {
        setError(
          error.message ||
            "Something went wrong while loading products."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        products.map((product) => product.category)
      )
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  if (loading) {
    return (
      <main className="products-page">
        <div className="container">
          <div className="loading-state">
            <p>Loading products...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="products-page">
        <div className="container">
          <div className="error-state">
            <h1>Something went wrong</h1>

            <p>{error}</p>

            <button
              onClick={() => window.location.reload()}
              className="hero-button"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="products-page">
      <div className="container">
        <header className="page-header">
          <p className="eyebrow">
            Our Collection
          </p>

          <h1>Shop Our Products</h1>

          <p>
            Explore our collection of carefully
            selected products.
          </p>
        </header>

        <section className="product-controls">
          <label htmlFor="product-search">
            Search products
          </label>

          <input
            id="product-search"
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          <label htmlFor="category-filter">
            Category
          </label>

          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </section>

        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
          />
        ) : (
          <div className="empty-state">
            <h2>No products found</h2>

            <p>
              Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Products;