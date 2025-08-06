import React from "react";
import { Product } from "../types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div style={{ border: "1px solid #eee", padding: "1rem", width: "250px" }}>
    <img src={product.image} alt={product.name} style={{ width: "100%" }} />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <Link href={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;