import React from "react";
import { Product } from "../types/product";
import ProductCard from "./ProductCard";

import styles from "./ProductList.module.css";

interface ProductListProps {
  products: Product[];
  centered?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, centered }) => (
  <div
    className={
      styles.list +
      ' ' +
      (centered ? styles.centered : styles.left)
    }
  >
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;