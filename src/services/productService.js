import fallbackProducts from "../data/products";

const API_URL = import.meta.env.VITE_API_URL || "/api/products";

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export async function getProducts() {
  try {
    const response = await fetchWithTimeout(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }

    const data = await response.json();
    return Array.isArray(data) ? data : fallbackProducts;
  } catch (error) {
    return fallbackProducts;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetchWithTimeout(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product.");
    }

    const product = await response.json();
    return product;
  } catch (error) {
    return (
      fallbackProducts.find(
        (product) => String(product.id) === String(id)
      ) || null
    );
  }
}