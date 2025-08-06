import { useRouter } from "next/router";
import React from "react";

import styles from "./ProductDetail.module.css";

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // You can fetch product details here using the id
  // For now, just display the id
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product Details</h1>
      <p className={styles.text}>Product ID: {id}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;