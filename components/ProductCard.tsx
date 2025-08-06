import React from "react";
import { Product } from "../types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div
    style={{
      border: "1px solid #eee",
      padding: "1rem",
      width: "250px",
      borderRadius: 12,
      boxShadow: "0 4px 16px rgba(99,102,241,0.10), 0 1.5px 4px rgba(49,46,129,0.08)",
      background: "#fff",
      transition: "box-shadow 0.2s"
    }}
  >
    <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: 8 }} />
    <h3>{product.name}</h3>
    <p>₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
    <Link href={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;