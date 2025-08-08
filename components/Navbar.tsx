// components/Navbar.tsx

import Link from "next/link";
import React from "react";
import { FaBars, FaTimes, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, sidebarCollapsed }) => {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left section */}
        <div className={styles.left}>
          <button
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={onToggleSidebar}
            className={styles.sidebarButton}
          >
            {sidebarCollapsed ? <FaBars /> : <FaTimes />}
          </button>

          <Link href="/" className={styles.logoLink}>
            <img src="/images/tshirt.png" alt="VB Cart Logo" className={styles.logoImg} />
            <span className={styles.logoText}>VB Cart</span>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className={styles.nav}>
          <Link
            href="/login"
            className={`${styles.navLink} ${hovered === "login" ? styles.navLinkHover : ""}`}
            onMouseEnter={() => setHovered("login")}
            onMouseLeave={() => setHovered(null)}
          >
            <FaSignInAlt className={styles.icon} />
            Login
          </Link>
          <Link
            href="/cart"
            className={`${styles.navLink} ${hovered === "cart" ? styles.navLinkHover : ""}`}
            onMouseEnter={() => setHovered("cart")}
            onMouseLeave={() => setHovered(null)}
          >
            <FaShoppingCart className={styles.icon} />
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
