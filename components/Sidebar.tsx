import React from "react";

interface SidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

interface SidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory, collapsed }) => {
  return (
    <aside style={{ minWidth: collapsed ? 48 : 200, background: "#eef2ff", padding: collapsed ? "1rem 0.5rem" : "2rem 1rem", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginRight: 32, transition: "min-width 0.2s, padding 0.2s" }}>
      {!collapsed && (
        <>
          <h3 style={{ marginBottom: "1.5rem", color: "#4f46e5", fontWeight: 700, marginTop: 16 }}>Filter by Category</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 12 }}>
              <button
                style={{
                  background: selectedCategory === null ? "#4f46e5" : "#fff",
                  color: selectedCategory === null ? "#fff" : "#4f46e5",
                  border: "1px solid #4f46e5",
                  borderRadius: 6,
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: 500,
                  marginBottom: 4
                }}
                onClick={() => onSelectCategory(null)}
              >
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat} style={{ marginBottom: 12 }}>
                <button
                  style={{
                    background: selectedCategory === cat ? "#4f46e5" : "#fff",
                    color: selectedCategory === cat ? "#fff" : "#4f46e5",
                    border: "1px solid #4f46e5",
                    borderRadius: 6,
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    width: "100%",
                    fontWeight: 500,
                    marginBottom: 4
                  }}
                  onClick={() => onSelectCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
