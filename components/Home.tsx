import React from "react";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Product } from "../types/product";
import styles from "./Home.module.css";

const products: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    description: "A comfortable cotton t-shirt.",
    price: 499,
    image: "/images/tshirt.png",
    category: "Tops",
  },
  {
    id: "2",
    name: "Denim Jeans",
    description: "Stylish blue denim jeans.",
    price: 799,
    image: "/images/jeans.png",
    category: "Bottoms",
  },
  {
    id: "3",
    name: "Denim Jeans",
    description: "Stylish blue denim jeans.",
    price: 799,
    image: "/images/jeans.png",
    category: "Bottoms",
  },
  {
    id: "4",
    name: "Denim Jeans",
    description: "Stylish blue denim jeans.",
    price: 799,
    image: "/images/jeans.png",
    category: "Bottoms",
  },
  // Add more products as needed
];


const categories = Array.from(new Set(products.map((p) => p.category)));

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const filteredProducts = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;
  return (
    <div className={styles.root}>
      <Navbar onToggleSidebar={() => setSidebarCollapsed((c) => !c)} sidebarCollapsed={sidebarCollapsed} />
      <div
        className={
          styles.content +
          ' ' +
          (sidebarCollapsed ? styles.contentJustifyCenter : styles.contentJustifyStart)
        }
      >
        {!sidebarCollapsed && (
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            collapsed={sidebarCollapsed}
          />
        )}
        <main
          className={
            styles.main +
            ' ' +
            (sidebarCollapsed ? styles.mainAlignCenter : styles.mainAlignStart)
          }
        >
          <ProductList products={filteredProducts} centered={sidebarCollapsed} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;