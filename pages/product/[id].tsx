import { useRouter } from "next/router";
import React from "react";

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // You can fetch product details here using the id
  // For now, just display the id
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;