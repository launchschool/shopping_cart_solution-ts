import { useEffect, useState } from "react";
import ToggleableAddProductForm from "./components/ToggleableAddProductForm";
import ShoppingCart from "./components/ShoppingCart";
import ProductListing from "./components/ProductListing";
import { Product, CartItem, BaseProduct } from "./types";
import {
  getProducts,
  getCartItems,
  updateProduct,
  addProduct,
  deleteProduct,
} from "./services/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    const fetchCartItems = async () => {
      const data = await getCartItems();
      setCartItems(data);
    };
    fetchProducts();
    fetchCartItems();
  }, []);

  const handleUpdateProduct = async (
    updatedProduct: BaseProduct,
    productId: string,
    callback?: () => void
  ) => {
    try {
      const data = await updateProduct(updatedProduct, productId);
      setProducts((prevState) => {
        return prevState.map((comment) => {
          if (comment._id === data._id) {
            return data;
          } else {
            return comment;
          }
        });
      });
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddProduct = async (
    newProduct: BaseProduct,
    callback?: () => void
  ) => {
    try {
      const data = await addProduct(newProduct);
      console.log("herhehrer", data);
      setProducts((prevState) => prevState.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteProduct(productId);
      setProducts((prevState) =>
        prevState.filter((product) => product._id !== productId)
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <ShoppingCart cartItems={cartItems} />
      <main>
        <ProductListing
          products={products}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
        />
        <ToggleableAddProductForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
}

export default App;
