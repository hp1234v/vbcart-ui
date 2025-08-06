import React from "react";

import styles from "./checkout.module.css";


import { useRouter } from "next/router";

const Checkout: React.FC = () => {
  const router = useRouter();
  // Check login status on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') !== 'true') {
      router.replace('/login');
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Checkout</h1>
      <p className={styles.text}>No items to checkout.</p>
    </div>
  );
};

export default Checkout;