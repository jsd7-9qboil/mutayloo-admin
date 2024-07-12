import apiClient from "./apiClient";

export const fetchProducts = async () => {
  return apiClient.get("/products");
};

export const fetchProductById = async (id) => {
  return apiClient.get(`/products/${id}`);
};

export const createProduct = async (productData) => {
  return apiClient.post("/products/create", productData);
};

export const updateProduct = async (id, productData) => {
  return apiClient.patch(`/products/update/${id}`, productData);
};

export const deleteProduct = async (id) => {
  return apiClient.delete(`/products/delete/${id}`);
};
