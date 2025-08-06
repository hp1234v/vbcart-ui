// Example for Navbar.tsx

import Link from "next/link";
import React from "react";

const linkStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
  padding: "0.5rem 1.2rem",
  borderRadius: "6px",
  transition: "background 0.2s, color 0.2s",
  fontSize: "1.1rem"
};

const linkHoverStyle: React.CSSProperties = {
  background: "rgba(99,102,241,0.15)", // indigo-500
  color: "#c7d2fe" // indigo-200
};

interface NavbarProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, sidebarCollapsed }) => {
  const [hovered, setHovered] = React.useState<string | null>(null);
  return (
    <header style={{ background: "linear-gradient(90deg, #6366f1 0%, #312e81 100%)", padding: "1.5rem 0 0.5rem 0", marginBottom: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0 1rem", minHeight: 60 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <button
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={onToggleSidebar}
            style={{
              background: "#fff",
              color: "#4f46e5",
              border: "none",
              borderRadius: 8,
              padding: "0.3rem 0.7rem",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "1.5rem",
              boxShadow: "0 2px 8px rgba(99,102,241,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            {sidebarCollapsed ? (
              <span role="img" aria-label="Open sidebar">☰</span>
            ) : (
              <span role="img" aria-label="Close sidebar">✖️</span>
            )}
          </button>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <img src="/images/tshirt.png" alt="VBcart Logo" style={{ width: 38, height: 38, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }} />
            <span style={{ fontSize: "2.3rem", fontWeight: 700, letterSpacing: "2px", color: "#fff", textShadow: "0 2px 8px rgba(49,46,129,0.10)" }}>
              VB Cart
            </span>
          </Link>
        </div>
        <nav style={{ display: "flex", justifyContent: "flex-end", gap: "2.5rem" }}>
          <Link href="/login" style={hovered === "login" ? { ...linkStyle, ...linkHoverStyle } : linkStyle} onMouseEnter={() => setHovered("login")} onMouseLeave={() => setHovered(null)}>
            <span role="img" aria-label="Login" style={{ marginRight: 8 }}>🔑</span>Login
          </Link>
          <Link href="/cart" style={hovered === "cart" ? { ...linkStyle, ...linkHoverStyle } : linkStyle} onMouseEnter={() => setHovered("cart")} onMouseLeave={() => setHovered(null)}>
            <span role="img" aria-label="Cart" style={{ marginRight: 8 }}>🛒</span>Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;