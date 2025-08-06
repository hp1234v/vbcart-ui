import React from "react";
import { Product } from "../types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

import styles from "./ProductCard.module.css";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className={styles.card}>
    <img src={product.image} alt={product.name} className={styles.image} />
    <h3>{product.name}</h3>
    <p>₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
    <Link href={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;