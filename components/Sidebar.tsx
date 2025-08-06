import React from "react";

import styles from "./Sidebar.module.css";

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
    <aside
      className={
        styles.sidebar +
        ' ' +
        (collapsed ? styles.sidebarCollapsed : styles.sidebarExpanded)
      }
    >
      {!collapsed && (
        <>
          <h3 className={styles.heading}>Filter by Category</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <button
                className={
                  styles.button +
                  (selectedCategory === null ? ' ' + styles.buttonSelected : '')
                }
                onClick={() => onSelectCategory(null)}
              >
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat} className={styles.listItem}>
                <button
                  className={
                    styles.button +
                    (selectedCategory === cat ? ' ' + styles.buttonSelected : '')
                  }
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
