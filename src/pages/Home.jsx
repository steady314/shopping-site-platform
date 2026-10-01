import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <p className="eyebrow">Simple. Modern. Everyday.</p>

            <h1>Find products you'll love.</h1>

            <p className="hero-text">
              Discover carefully selected products designed
              for everyday life.
            </p>

            <Link to="/products" className="hero-button">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;