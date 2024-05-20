import axios from "axios";
import { BaseProduct } from "../types";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const getCartItems = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};

export const updateProduct = async (
  updatedProduct: BaseProduct,
  productId: string
) => {
  const { data } = await axios.put(`/api/products/${productId}`, {
    ...updatedProduct,
  });
  return data;
};

export const addProduct = async (newProduct: BaseProduct) => {
  const { data } = await axios.post("/api/products", { ...newProduct });
  return data;
};

export const deleteProduct = async (productId: string) => {
  const { data } = await axios.delete(`/api/products/${productId}`);
  return data;
};
