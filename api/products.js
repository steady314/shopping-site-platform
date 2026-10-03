export default async function handler(req, res) {
  const { id } = req.query;

  const endpoint = id
    ? `https://fakestoreapi.com/products/${id}`
    : "https://fakestoreapi.com/products";

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Failed to fetch products from Fake Store API.",
      });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Server error while fetching products.",
    });
  }
}