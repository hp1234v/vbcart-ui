import React from "react";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Product } from "../types/product";

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
  // Add more products as needed
];


const categories = Array.from(new Set(products.map((p) => p.category)));

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const filteredProducts = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;
  return (
    <div>
      <Navbar onToggleSidebar={() => setSidebarCollapsed((c) => !c)} sidebarCollapsed={sidebarCollapsed} />
      <div style={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          collapsed={sidebarCollapsed}
        />
        <main style={{ flex: 1 }}>
          <h1 style={{ margin: "1rem 0 2rem 0" }}>Welcome to the Clothing Website</h1>
          <ProductList products={filteredProducts} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;