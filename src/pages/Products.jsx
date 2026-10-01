import ProductCard from "../components/ProductCard";
import "./Products.css";
import products from "../data/products";

function Products() {
    return(
        <main className="page">
            <section className="page_content">
                <div className="products-header">
                    <p products-header_eyebrow>SHOP</p>
                    <h1>All Products</h1>
                    <p>Discover our latest collection</p>
                </div>
                <div className="product-grid">
                    
                    {products.map((product) => (<ProductCard key={product.id} product={product} />))}
                </div>
            </section>
        </main>
    );
}
export default Products;