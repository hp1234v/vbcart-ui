import React from "react";


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
    <div>
      <h1>Checkout</h1>
      <p>No items to checkout.</p>
    </div>
  );
};

export default Checkout;