// Example for Navbar.tsx


import Link from "next/link";
import React from "react";
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
        <div className={styles.left}>
          <button
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={onToggleSidebar}
            className={styles.sidebarButton}
          >
            {sidebarCollapsed ? (
              <span role="img" aria-label="Open sidebar">☰</span>
            ) : (
              <span role="img" aria-label="Close sidebar">✖️</span>
            )}
          </button>
          <Link href="/" className={styles.logoLink}>
            <img src="/images/tshirt.png" alt="VBcart Logo" className={styles.logoImg} />
            <span className={styles.logoText}>
              VB Cart
            </span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link
            href="/login"
            className={hovered === "login" ? `${styles.navLink} ${styles.navLinkHover}` : styles.navLink}
            onMouseEnter={() => setHovered("login")}
            onMouseLeave={() => setHovered(null)}
          >
            <span role="img" aria-label="Login" className={styles.icon}>🔑</span>Login
          </Link>
          <Link
            href="/cart"
            className={hovered === "cart" ? `${styles.navLink} ${styles.navLinkHover}` : styles.navLink}
            onMouseEnter={() => setHovered("cart")}
            onMouseLeave={() => setHovered(null)}
          >
            <span role="img" aria-label="Cart" className={styles.icon}>🛒</span>Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;