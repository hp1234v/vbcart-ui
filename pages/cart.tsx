import React from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

import styles from "./cart.module.css";


const Cart: React.FC = () => {
  const router = useRouter();
  // Check login status on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') !== 'true') {
      router.replace('/login');
    }
  }, [router]);
  // Example: Replace with your cart logic
  const cartIsEmpty = false; // Set to true if cart is empty
  return (
    <div style={{ width: "100%" }}>
      <Navbar onToggleSidebar={() => {}} sidebarCollapsed={false} />
      <h1>Your Cart</h1>
      {cartIsEmpty ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          {/* Cart items would go here */}
          <button
            className={styles.checkoutButton}
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;