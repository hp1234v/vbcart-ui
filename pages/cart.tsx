import React from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Cart: React.FC = () => {
  const router = useRouter();
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
            style={{
              background: "#4f46e5",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "0.7rem 2rem",
              fontWeight: 700,
              fontSize: "1.1rem",
              marginTop: 24,
              cursor: "pointer"
            }}
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