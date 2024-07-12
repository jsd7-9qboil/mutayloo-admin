import apiClient from "./apiClient";

export const login = async (email, password) => {
  return apiClient.post("/users/login", { email, password });
};

export const fetchUsers = async () => {
  return apiClient.get("/users");
};

export const fetchUserById = async (id) => {
  return apiClient.get(`/users/${id}`);
};

export const createUser = async (userData) => {
  return apiClient.post("/users", userData);
};

export const updateUser = async (id, userData) => {
  return apiClient.patch(`/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  return apiClient.delete(`/users/${id}`);
};
