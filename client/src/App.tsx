import { useEffect, useState } from "react";
import ToggleableAddProductForm from "./components/ToggleableAddProductForm";
import ShoppingCart from "./components/ShoppingCart";
import ProductListing from "./components/ProductListing";
import { mockProducts, mockCart } from "./mockData/data";
import { Product, CartItem } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
    setCartItems(mockCart);
  }, []);

  return (
    <div id="app">
      <ShoppingCart cartItems={cartItems} />
      <main>
        <ProductListing products={products} />
        <ToggleableAddProductForm />
      </main>
    </div>
  );
}

export default App;
